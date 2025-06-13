import express from "express";
import Joi from "joi";
import pool from "../../config/postgres.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication to all routes
router.use(authenticateToken);

// Validation schema
const jobSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  department: Joi.string().min(1).max(100).required(),
  location: Joi.string().min(1).max(255).required(),
  type: Joi.string()
    .valid("Full-time", "Part-time", "Contract", "Internship")
    .required(),
  level: Joi.string()
    .valid("Entry", "Mid-level", "Senior", "Lead", "Executive")
    .required(),
  description: Joi.string().min(1).required(),
  requirements: Joi.array().items(Joi.string()),
  benefits: Joi.array().items(Joi.string()),
  salary: Joi.string().allow("", null),
  status: Joi.string().valid("active", "paused", "closed").default("active"),
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const { status, department, limit = 50, offset = 0 } = req.query;

    let query = `
      SELECT j.*, au.username as created_by_username 
      FROM jobs j 
      LEFT JOIN admin_users au ON j.created_by = au.id 
      WHERE 1=1
    `;
    const params = [];
    let paramCount = 0;

    if (status) {
      query += ` AND j.status = $${++paramCount}`;
      params.push(status);
    }

    if (department) {
      query += ` AND j.department = $${++paramCount}`;
      params.push(department);
    }

    query += ` ORDER BY j.created_at DESC LIMIT $${++paramCount} OFFSET $${++paramCount}`;
    params.push(parseInt(limit), parseInt(offset));

    const client = await pool.connect();
    try {
      const result = await client.query(query, params);

      // Get total count
      let countQuery = "SELECT COUNT(*) FROM jobs WHERE 1=1";
      const countParams = [];
      let countParamCount = 0;

      if (status) {
        countQuery += ` AND status = $${++countParamCount}`;
        countParams.push(status);
      }

      if (department) {
        countQuery += ` AND department = $${++countParamCount}`;
        countParams.push(department);
      }

      const countResult = await client.query(countQuery, countParams);
      const total = parseInt(countResult.rows[0].count);

      res.json({
        success: true,
        data: {
          jobs: result.rows,
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
    console.error("Get jobs error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get job by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT j.*, au.username as created_by_username 
         FROM jobs j 
         LEFT JOIN admin_users au ON j.created_by = au.id 
         WHERE j.id = $1`,
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      res.json({
        success: true,
        data: {
          job: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get job error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Create new job
router.post("/", async (req, res) => {
  try {
    const { error, value } = jobSchema.validate(req.body);
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

    const {
      title,
      department,
      location,
      type,
      level,
      description,
      requirements = [],
      benefits = [],
      salary,
      status = "active",
    } = value;

    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO jobs (title, department, location, type, level, description, requirements, benefits, salary, status, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
         RETURNING *`,
        [
          title,
          department,
          location,
          type,
          level,
          description,
          requirements,
          benefits,
          salary,
          status,
          req.user.id,
        ],
      );

      res.status(201).json({
        success: true,
        message: "Job created successfully",
        data: {
          job: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Create job error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update job
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = jobSchema.validate(req.body);
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

    const {
      title,
      department,
      location,
      type,
      level,
      description,
      requirements = [],
      benefits = [],
      salary,
      status,
    } = value;

    const client = await pool.connect();
    try {
      const result = await client.query(
        `UPDATE jobs 
         SET title = $1, department = $2, location = $3, type = $4, level = $5, 
             description = $6, requirements = $7, benefits = $8, salary = $9, status = $10
         WHERE id = $11
         RETURNING *`,
        [
          title,
          department,
          location,
          type,
          level,
          description,
          requirements,
          benefits,
          salary,
          status,
          id,
        ],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      res.json({
        success: true,
        message: "Job updated successfully",
        data: {
          job: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Update job error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Delete job
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        "DELETE FROM jobs WHERE id = $1 RETURNING *",
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      res.json({
        success: true,
        message: "Job deleted successfully",
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Delete job error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update job status
router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["active", "paused", "closed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        "UPDATE jobs SET status = $1 WHERE id = $2 RETURNING *",
        [status, id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      res.json({
        success: true,
        message: "Job status updated successfully",
        data: {
          job: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Update job status error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get jobs statistics
router.get("/stats/overview", async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const stats = await client.query(`
        SELECT 
          COUNT(*) as total_jobs,
          COUNT(*) FILTER (WHERE status = 'active') as active_jobs,
          COUNT(*) FILTER (WHERE status = 'paused') as paused_jobs,
          COUNT(*) FILTER (WHERE status = 'closed') as closed_jobs,
          SUM(applications_count) as total_applications,
          AVG(applications_count) as avg_applications_per_job
        FROM jobs
      `);

      const departmentStats = await client.query(`
        SELECT department, COUNT(*) as count
        FROM jobs
        WHERE status = 'active'
        GROUP BY department
        ORDER BY count DESC
      `);

      res.json({
        success: true,
        data: {
          overview: stats.rows[0],
          by_department: departmentStats.rows,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get jobs stats error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
