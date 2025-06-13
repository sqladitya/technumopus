import express from "express";
import pool from "../../config/postgres.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication to all routes
router.use(authenticateToken);

// Get dashboard overview statistics
router.get("/overview", async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      // Get overall statistics
      const overallStats = await client.query(`
        WITH stats AS (
          SELECT 
            (SELECT COUNT(*) FROM contact_submissions) as total_submissions,
            (SELECT COUNT(*) FROM contact_submissions WHERE status = 'new') as new_submissions,
            (SELECT COUNT(*) FROM contact_submissions WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as submissions_last_7_days,
            (SELECT COUNT(*) FROM jobs WHERE status = 'active') as active_jobs,
            (SELECT COUNT(*) FROM team_members WHERE status = 'active') as active_team_members,
            (SELECT COUNT(*) FROM analytics WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as page_views_7_days,
            (SELECT COALESCE(SUM(applications_count), 0) FROM jobs) as total_applications
        )
        SELECT * FROM stats
      `);

      // Get recent activity
      const recentActivity = await client.query(`
        SELECT 
          'contact' as type,
          CONCAT('New ', CASE WHEN type = 'contact' THEN 'contact form' ELSE 'consultation request' END, ' from ', name) as message,
          created_at
        FROM contact_submissions
        WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
        ORDER BY created_at DESC
        LIMIT 10
      `);

      // Get daily submission trends (last 30 days)
      const submissionTrends = await client.query(`
        SELECT 
          DATE(created_at) as date,
          COUNT(*) as count,
          COUNT(*) FILTER (WHERE type = 'contact') as contact_count,
          COUNT(*) FILTER (WHERE type = 'consultation') as consultation_count
        FROM contact_submissions
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
        ORDER BY date ASC
      `);

      // Get top performing pages (if analytics are tracked)
      const topPages = await client.query(`
        SELECT 
          page_path,
          COUNT(*) as views,
          COUNT(DISTINCT visitor_id) as unique_visitors
        FROM analytics
        WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
        GROUP BY page_path
        ORDER BY views DESC
        LIMIT 10
      `);

      // Get submission categories breakdown
      const categoryBreakdown = await client.query(`
        SELECT 
          COALESCE(category, 'Uncategorized') as category,
          COUNT(*) as count
        FROM contact_submissions
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY category
        ORDER BY count DESC
        LIMIT 5
      `);

      res.json({
        success: true,
        data: {
          overview: overallStats.rows[0],
          recent_activity: recentActivity.rows,
          submission_trends: submissionTrends.rows,
          top_pages: topPages.rows,
          category_breakdown: categoryBreakdown.rows,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get dashboard overview error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get performance metrics
router.get("/performance", async (req, res) => {
  try {
    const { period = "7d" } = req.query;

    let interval;
    switch (period) {
      case "24h":
        interval = "1 day";
        break;
      case "7d":
        interval = "7 days";
        break;
      case "30d":
        interval = "30 days";
        break;
      case "90d":
        interval = "90 days";
        break;
      default:
        interval = "7 days";
    }

    const client = await pool.connect();
    try {
      // Submission performance
      const submissionMetrics = await client.query(
        `
        SELECT 
          COUNT(*) as total_submissions,
          COUNT(*) FILTER (WHERE status = 'responded') as responded_count,
          ROUND(
            (COUNT(*) FILTER (WHERE status = 'responded')::numeric / 
             NULLIF(COUNT(*), 0)) * 100, 2
          ) as response_rate,
          AVG(
            EXTRACT(EPOCH FROM (
              CASE 
                WHEN status = 'responded' THEN updated_at - created_at
                ELSE NULL
              END
            )) / 3600
          ) as avg_response_time_hours
        FROM contact_submissions
        WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL $1
      `,
        [interval],
      );

      // Job application metrics
      const jobMetrics = await client.query(
        `
        SELECT 
          COUNT(*) as total_jobs,
          COUNT(*) FILTER (WHERE status = 'active') as active_jobs,
          COALESCE(SUM(applications_count), 0) as total_applications,
          COALESCE(AVG(applications_count), 0) as avg_applications_per_job
        FROM jobs
        WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL $1
      `,
        [interval],
      );

      // Team growth
      const teamMetrics = await client.query(
        `
        SELECT 
          COUNT(*) as total_members,
          COUNT(*) FILTER (WHERE status = 'active') as active_members,
          COUNT(*) FILTER (WHERE join_date >= CURRENT_DATE - INTERVAL $1) as new_members
        FROM team_members
      `,
        [interval],
      );

      res.json({
        success: true,
        data: {
          period,
          submissions: submissionMetrics.rows[0],
          jobs: jobMetrics.rows[0],
          team: teamMetrics.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get performance metrics error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Track page view (for analytics)
router.post("/track", async (req, res) => {
  try {
    const { page_path, visitor_id, referrer, session_duration } = req.body;

    if (!page_path) {
      return res.status(400).json({
        success: false,
        message: "Page path is required",
      });
    }

    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get("User-Agent");

    const client = await pool.connect();
    try {
      await client.query(
        `INSERT INTO analytics (page_path, visitor_id, ip_address, user_agent, referrer, session_duration)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          page_path,
          visitor_id,
          ip_address,
          user_agent,
          referrer,
          session_duration,
        ],
      );

      res.json({
        success: true,
        message: "Page view tracked successfully",
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Track page view error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get system health
router.get("/health", async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      // Check database connectivity
      const dbCheck = await client.query("SELECT NOW() as db_time");

      // Get database size and connection info
      const dbStats = await client.query(`
        SELECT 
          pg_size_pretty(pg_database_size(current_database())) as database_size,
          (SELECT count(*) FROM pg_stat_activity WHERE state = 'active') as active_connections,
          (SELECT setting FROM pg_settings WHERE name = 'max_connections') as max_connections
      `);

      // Get table row counts
      const tableCounts = await client.query(`
        SELECT 
          (SELECT COUNT(*) FROM contact_submissions) as submissions_count,
          (SELECT COUNT(*) FROM jobs) as jobs_count,
          (SELECT COUNT(*) FROM team_members) as team_members_count,
          (SELECT COUNT(*) FROM admin_users) as admin_users_count,
          (SELECT COUNT(*) FROM analytics) as analytics_count
      `);

      res.json({
        success: true,
        data: {
          database: {
            connected: true,
            current_time: dbCheck.rows[0].db_time,
            size: dbStats.rows[0].database_size,
            active_connections: parseInt(dbStats.rows[0].active_connections),
            max_connections: parseInt(dbStats.rows[0].max_connections),
          },
          tables: tableCounts.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get system health error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: {
        database: {
          connected: false,
          error: error.message,
        },
      },
    });
  }
});

export default router;
