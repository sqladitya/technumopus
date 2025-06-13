import express from "express";
import bcrypt from "bcryptjs";
import Joi from "joi";
import pool from "../config/postgres.js";
import { generateToken, authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// Validation schemas
const loginSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  full_name: Joi.string().max(255).required(),
});

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
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

    const { username, password } = value;

    const client = await pool.connect();
    try {
      // Find user by username
      const result = await client.query(
        "SELECT * FROM admin_users WHERE username = $1 AND is_active = true",
        [username],
      );

      if (result.rows.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      const user = result.rows[0];

      // Verify password
      const isValidPassword = await bcrypt.compare(
        password,
        user.password_hash,
      );
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Update last login
      await client.query(
        "UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = $1",
        [user.id],
      );

      // Generate token
      const token = generateToken(user.id, user.username);

      res.json({
        success: true,
        message: "Login successful",
        data: {
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            full_name: user.full_name,
            role: user.role,
          },
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Register admin (only for development/setup)
router.post("/register", async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
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

    const { username, password, email, full_name } = value;

    const client = await pool.connect();
    try {
      // Check if user already exists
      const existingUser = await client.query(
        "SELECT id FROM admin_users WHERE username = $1 OR email = $2",
        [username, email],
      );

      if (existingUser.rows.length > 0) {
        return res.status(409).json({
          success: false,
          message: "Username or email already exists",
        });
      }

      // Hash password
      const saltRounds = 12;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      // Insert new user
      const result = await client.query(
        `INSERT INTO admin_users (username, password_hash, email, full_name) 
         VALUES ($1, $2, $3, $4) 
         RETURNING id, username, email, full_name, role, created_at`,
        [username, passwordHash, email, full_name],
      );

      const newUser = result.rows[0];

      res.status(201).json({
        success: true,
        message: "Admin user created successfully",
        data: {
          user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            full_name: newUser.full_name,
            role: newUser.role,
            created_at: newUser.created_at,
          },
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get current user info
router.get("/me", authenticateToken, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Logout (client-side token removal)
router.post("/logout", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

export default router;
