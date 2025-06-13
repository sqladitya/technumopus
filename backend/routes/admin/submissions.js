import express from "express";
import Joi from "joi";
import pool from "../../config/postgres.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication to all routes
router.use(authenticateToken);

// Validation schema for updating submission
const updateSubmissionSchema = Joi.object({
  status: Joi.string().valid("new", "read", "responded", "archived").required(),
});

// Get all submissions
router.get("/", async (req, res) => {
  try {
    const {
      status,
      type,
      limit = 50,
      offset = 0,
      sort_by = "created_at",
      sort_order = "desc",
    } = req.query;

    let query = `
      SELECT * FROM contact_submissions 
      WHERE 1=1
    `;
    const params = [];
    let paramCount = 0;

    if (status) {
      query += ` AND status = $${++paramCount}`;
      params.push(status);
    }

    if (type) {
      query += ` AND type = $${++paramCount}`;
      params.push(type);
    }

    // Validate sort parameters
    const validSortColumns = [
      "created_at",
      "name",
      "email",
      "company",
      "status",
      "type",
    ];
    const validSortOrders = ["asc", "desc"];

    const sortBy = validSortColumns.includes(sort_by) ? sort_by : "created_at";
    const sortOrder = validSortOrders.includes(sort_order.toLowerCase())
      ? sort_order.toUpperCase()
      : "DESC";

    query += ` ORDER BY ${sortBy} ${sortOrder} LIMIT $${++paramCount} OFFSET $${++paramCount}`;
    params.push(parseInt(limit), parseInt(offset));

    const client = await pool.connect();
    try {
      const result = await client.query(query, params);

      // Get total count
      let countQuery = "SELECT COUNT(*) FROM contact_submissions WHERE 1=1";
      const countParams = [];
      let countParamCount = 0;

      if (status) {
        countQuery += ` AND status = $${++countParamCount}`;
        countParams.push(status);
      }

      if (type) {
        countQuery += ` AND type = $${++countParamCount}`;
        countParams.push(type);
      }

      const countResult = await client.query(countQuery, countParams);
      const total = parseInt(countResult.rows[0].count);

      res.json({
        success: true,
        data: {
          submissions: result.rows,
          pagination: {
            total,
            limit: parseInt(limit),
            offset: parseInt(offset),
            pages: Math.ceil(total / limit),
          },
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get submissions error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get submission by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        "SELECT * FROM contact_submissions WHERE id = $1",
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Submission not found",
        });
      }

      // Update status to 'read' if it's 'new'
      if (result.rows[0].status === "new") {
        await client.query(
          "UPDATE contact_submissions SET status = 'read' WHERE id = $1",
          [id],
        );
        result.rows[0].status = "read";
      }

      res.json({
        success: true,
        data: {
          submission: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get submission error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update submission status
router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = updateSubmissionSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        details: error.details.map((detail) => ({
          field: detail.path[0],
          message: detail.message,
        })),
      });
    }

    const { status } = value;

    const client = await pool.connect();
    try {
      const result = await client.query(
        "UPDATE contact_submissions SET status = $1 WHERE id = $2 RETURNING *",
        [status, id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Submission not found",
        });
      }

      res.json({
        success: true,
        message: "Submission status updated successfully",
        data: {
          submission: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Update submission status error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Delete submission
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        "DELETE FROM contact_submissions WHERE id = $1 RETURNING *",
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Submission not found",
        });
      }

      res.json({
        success: true,
        message: "Submission deleted successfully",
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Delete submission error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Bulk update submissions status
router.patch("/bulk/status", async (req, res) => {
  try {
    const { submission_ids, status } = req.body;

    if (
      !Array.isArray(submission_ids) ||
      submission_ids.length === 0 ||
      !["new", "read", "responded", "archived"].includes(status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid submission IDs or status",
      });
    }

    const client = await pool.connect();
    try {
      const placeholders = submission_ids
        .map((_, index) => `$${index + 1}`)
        .join(",");
      const result = await client.query(
        `UPDATE contact_submissions 
         SET status = $${submission_ids.length + 1} 
         WHERE id IN (${placeholders}) 
         RETURNING id`,
        [...submission_ids, status],
      );

      res.json({
        success: true,
        message: `${result.rows.length} submissions updated successfully`,
        data: {
          updated_count: result.rows.length,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Bulk update submissions error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get submissions statistics
router.get("/stats/overview", async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const stats = await client.query(`
        SELECT 
          COUNT(*) as total_submissions,
          COUNT(*) FILTER (WHERE status = 'new') as new_submissions,
          COUNT(*) FILTER (WHERE status = 'read') as read_submissions,
          COUNT(*) FILTER (WHERE status = 'responded') as responded_submissions,
          COUNT(*) FILTER (WHERE status = 'archived') as archived_submissions,
          COUNT(*) FILTER (WHERE type = 'contact') as contact_forms,
          COUNT(*) FILTER (WHERE type = 'consultation') as consultation_requests,
          COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as last_7_days,
          COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days') as last_30_days
        FROM contact_submissions
      `);

      const dailyStats = await client.query(`
        SELECT 
          DATE(created_at) as date,
          COUNT(*) as count,
          COUNT(*) FILTER (WHERE type = 'contact') as contact_count,
          COUNT(*) FILTER (WHERE type = 'consultation') as consultation_count
        FROM contact_submissions
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
        ORDER BY date DESC
      `);

      const topCategories = await client.query(`
        SELECT 
          category,
          COUNT(*) as count
        FROM contact_submissions
        WHERE category IS NOT NULL
        GROUP BY category
        ORDER BY count DESC
        LIMIT 10
      `);

      res.json({
        success: true,
        data: {
          overview: stats.rows[0],
          daily_stats: dailyStats.rows,
          top_categories: topCategories.rows,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get submissions stats error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Export submissions (CSV format)
router.get("/export/csv", async (req, res) => {
  try {
    const { status, type, start_date, end_date } = req.query;

    let query = "SELECT * FROM contact_submissions WHERE 1=1";
    const params = [];
    let paramCount = 0;

    if (status) {
      query += ` AND status = $${++paramCount}`;
      params.push(status);
    }

    if (type) {
      query += ` AND type = $${++paramCount}`;
      params.push(type);
    }

    if (start_date) {
      query += ` AND created_at >= $${++paramCount}`;
      params.push(start_date);
    }

    if (end_date) {
      query += ` AND created_at <= $${++paramCount}`;
      params.push(end_date);
    }

    query += " ORDER BY created_at DESC";

    const client = await pool.connect();
    try {
      const result = await client.query(query, params);

      // Convert to CSV
      const csvHeaders = [
        "ID",
        "Type",
        "Name",
        "Email",
        "Company",
        "Phone",
        "Category",
        "Project Type",
        "Budget",
        "Timeline",
        "Message",
        "Status",
        "Created At",
      ];

      const csvRows = result.rows.map((row) => [
        row.id,
        row.type,
        row.name,
        row.email,
        row.company || "",
        row.phone || "",
        row.category || "",
        row.project_type || "",
        row.budget || "",
        row.timeline || "",
        `"${row.message.replace(/"/g, '""')}"`, // Escape quotes in message
        row.status,
        row.created_at,
      ]);

      const csvContent = [
        csvHeaders.join(","),
        ...csvRows.map((row) => row.join(",")),
      ].join("\n");

      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="submissions_${new Date().toISOString().split("T")[0]}.csv"`,
      );
      res.send(csvContent);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Export submissions error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
