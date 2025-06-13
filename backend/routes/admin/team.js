import express from "express";
import Joi from "joi";
import pool from "../../config/postgres.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication to all routes
router.use(authenticateToken);

// Validation schema
const teamMemberSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  position: Joi.string().min(1).max(255).required(),
  department: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().allow("", null),
  bio: Joi.string().required(),
  skills: Joi.array().items(Joi.string()),
  image_url: Joi.string().uri().allow("", null),
  linkedin_url: Joi.string().uri().allow("", null),
  twitter_url: Joi.string().uri().allow("", null),
  status: Joi.string().valid("active", "inactive").default("active"),
  join_date: Joi.date().iso(),
});

// Get all team members
router.get("/", async (req, res) => {
  try {
    const { status, department, limit = 50, offset = 0 } = req.query;

    let query = `
      SELECT tm.*, au.username as created_by_username 
      FROM team_members tm 
      LEFT JOIN admin_users au ON tm.created_by = au.id 
      WHERE 1=1
    `;
    const params = [];
    let paramCount = 0;

    if (status) {
      query += ` AND tm.status = $${++paramCount}`;
      params.push(status);
    }

    if (department) {
      query += ` AND tm.department = $${++paramCount}`;
      params.push(department);
    }

    query += ` ORDER BY tm.name ASC LIMIT $${++paramCount} OFFSET $${++paramCount}`;
    params.push(parseInt(limit), parseInt(offset));

    const client = await pool.connect();
    try {
      const result = await client.query(query, params);

      // Get total count
      let countQuery = "SELECT COUNT(*) FROM team_members WHERE 1=1";
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
          team_members: result.rows,
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
    console.error("Get team members error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get team member by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT tm.*, au.username as created_by_username 
         FROM team_members tm 
         LEFT JOIN admin_users au ON tm.created_by = au.id 
         WHERE tm.id = $1`,
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Team member not found",
        });
      }

      res.json({
        success: true,
        data: {
          team_member: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Get team member error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Create new team member
router.post("/", async (req, res) => {
  try {
    const { error, value } = teamMemberSchema.validate(req.body);
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
      name,
      position,
      department,
      email,
      phone,
      bio,
      skills = [],
      image_url,
      linkedin_url,
      twitter_url,
      status = "active",
      join_date,
    } = value;

    const client = await pool.connect();
    try {
      // Check if email already exists
      const existingMember = await client.query(
        "SELECT id FROM team_members WHERE email = $1",
        [email],
      );

      if (existingMember.rows.length > 0) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      const result = await client.query(
        `INSERT INTO team_members (name, position, department, email, phone, bio, skills, image_url, linkedin_url, twitter_url, status, join_date, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         RETURNING *`,
        [
          name,
          position,
          department,
          email,
          phone,
          bio,
          skills,
          image_url,
          linkedin_url,
          twitter_url,
          status,
          join_date,
          req.user.id,
        ],
      );

      res.status(201).json({
        success: true,
        message: "Team member created successfully",
        data: {
          team_member: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Create team member error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update team member
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = teamMemberSchema.validate(req.body);
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
      name,
      position,
      department,
      email,
      phone,
      bio,
      skills = [],
      image_url,
      linkedin_url,
      twitter_url,
      status,
      join_date,
    } = value;

    const client = await pool.connect();
    try {
      // Check if email already exists for different member
      const existingMember = await client.query(
        "SELECT id FROM team_members WHERE email = $1 AND id != $2",
        [email, id],
      );

      if (existingMember.rows.length > 0) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      const result = await client.query(
        `UPDATE team_members 
         SET name = $1, position = $2, department = $3, email = $4, phone = $5, 
             bio = $6, skills = $7, image_url = $8, linkedin_url = $9, 
             twitter_url = $10, status = $11, join_date = $12
         WHERE id = $13
         RETURNING *`,
        [
          name,
          position,
          department,
          email,
          phone,
          bio,
          skills,
          image_url,
          linkedin_url,
          twitter_url,
          status,
          join_date,
          id,
        ],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Team member not found",
        });
      }

      res.json({
        success: true,
        message: "Team member updated successfully",
        data: {
          team_member: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Update team member error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Delete team member
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await pool.connect();
    try {
      const result = await client.query(
        "DELETE FROM team_members WHERE id = $1 RETURNING *",
        [id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Team member not found",
        });
      }

      res.json({
        success: true,
        message: "Team member deleted successfully",
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Delete team member error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update team member status
router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["active", "inactive"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        "UPDATE team_members SET status = $1 WHERE id = $2 RETURNING *",
        [status, id],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Team member not found",
        });
      }

      res.json({
        success: true,
        message: "Team member status updated successfully",
        data: {
          team_member: result.rows[0],
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Update team member status error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get team statistics
router.get("/stats/overview", async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      const stats = await client.query(`
        SELECT 
          COUNT(*) as total_members,
          COUNT(*) FILTER (WHERE status = 'active') as active_members,
          COUNT(*) FILTER (WHERE status = 'inactive') as inactive_members
        FROM team_members
      `);

      const departmentStats = await client.query(`
        SELECT department, COUNT(*) as count
        FROM team_members
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
    console.error("Get team stats error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
