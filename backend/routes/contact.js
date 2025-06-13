import express from "express";
import Joi from "joi";
import pool from "../config/postgres.js";

const router = express.Router();

// Validation schemas
const contactFormSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  email: Joi.string().email().required(),
  company: Joi.string().max(255).allow("", null),
  phone: Joi.string().max(50).allow("", null),
  category: Joi.string().max(100).allow("", null),
  message: Joi.string().min(1).required(),
});

const consultationFormSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  email: Joi.string().email().required(),
  company: Joi.string().max(255).allow("", null),
  phone: Joi.string().max(50).allow("", null),
  project_type: Joi.string().max(100).allow("", null),
  budget: Joi.string().max(100).allow("", null),
  timeline: Joi.string().max(100).allow("", null),
  preferred_date: Joi.date().iso().allow(null),
  preferred_time: Joi.string().max(50).allow("", null),
  message: Joi.string().min(1).required(),
});

// Submit contact form
router.post("/contact", async (req, res) => {
  try {
    const { error, value } = contactFormSchema.validate(req.body);
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

    const { name, email, company, phone, category, message } = value;

    // Get client IP and user agent
    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get("User-Agent");

    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO contact_submissions (type, name, email, company, phone, category, message, ip_address, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING id, created_at`,
        [
          "contact",
          name,
          email,
          company,
          phone,
          category,
          message,
          ip_address,
          user_agent,
        ],
      );

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: {
          submission_id: result.rows[0].id,
          submitted_at: result.rows[0].created_at,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Submit consultation request
router.post("/consultation", async (req, res) => {
  try {
    const { error, value } = consultationFormSchema.validate(req.body);
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
      email,
      company,
      phone,
      project_type,
      budget,
      timeline,
      preferred_date,
      preferred_time,
      message,
    } = value;

    // Get client IP and user agent
    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get("User-Agent");

    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO contact_submissions (type, name, email, company, phone, project_type, budget, timeline, preferred_date, preferred_time, message, ip_address, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         RETURNING id, created_at`,
        [
          "consultation",
          name,
          email,
          company,
          phone,
          project_type,
          budget,
          timeline,
          preferred_date,
          preferred_time,
          message,
          ip_address,
          user_agent,
        ],
      );

      res.status(201).json({
        success: true,
        message: "Consultation request submitted successfully",
        data: {
          submission_id: result.rows[0].id,
          submitted_at: result.rows[0].created_at,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Consultation request submission error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get contact form categories (for dropdown)
router.get("/categories", async (req, res) => {
  try {
    const categories = [
      "SaaS Development",
      "Cloud Architecture",
      "Digital Transformation",
      "SAP Consulting",
      "Hardware Infrastructure",
      "Partnership Inquiry",
      "General Inquiry",
      "Other",
    ];

    res.json({
      success: true,
      data: {
        categories,
      },
    });
  } catch (error) {
    console.error("Get categories error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get project types (for consultation dropdown)
router.get("/project-types", async (req, res) => {
  try {
    const projectTypes = [
      "Custom Software Development",
      "Cloud Migration",
      "Digital Transformation",
      "SAP Implementation",
      "Infrastructure Setup",
      "Mobile App Development",
      "Web Application",
      "API Development",
      "System Integration",
      "Other",
    ];

    res.json({
      success: true,
      data: {
        project_types: projectTypes,
      },
    });
  } catch (error) {
    console.error("Get project types error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
