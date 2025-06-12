import express from "express";
import { Subscription } from "../models/Subscription.js";
import {
  validateSubscription,
  validateEmail,
} from "../middleware/validation.js";
import { subscriptionRateLimit } from "../middleware/rateLimit.js";

const router = express.Router();

// POST /api/subscriptions - Create new subscription
router.post(
  "/",
  subscriptionRateLimit,
  validateSubscription,
  async (req, res) => {
    try {
      const { email, source } = req.body;

      // Get client information
      const ip_address = req.ip || req.connection.remoteAddress;
      const user_agent = req.get("User-Agent");

      const subscription = await Subscription.create({
        email: email.toLowerCase().trim(),
        source: source || "website",
        ip_address,
        user_agent,
      });

      res.status(201).json({
        success: true,
        message: "Successfully subscribed to our newsletter!",
        data: subscription.toJSON(),
      });
    } catch (error) {
      console.error("Subscription error:", error);

      if (error.message === "Email is already subscribed") {
        return res.status(409).json({
          success: false,
          error: "Already subscribed",
          message:
            "This email address is already subscribed to our newsletter.",
        });
      }

      res.status(500).json({
        success: false,
        error: "Subscription failed",
        message: "Unable to process subscription. Please try again later.",
      });
    }
  },
);

// GET /api/subscriptions - Get all active subscriptions (for admin use)
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 50, active = "true" } = req.query;

    // Simple pagination
    const offset = (page - 1) * limit;

    let subscriptions;
    if (active === "true") {
      subscriptions = await Subscription.findAllActive();
    } else {
      // Would need to implement findAll method for this
      subscriptions = await Subscription.findAllActive();
    }

    // Apply pagination
    const paginatedResults = subscriptions.slice(
      offset,
      offset + parseInt(limit),
    );

    res.json({
      success: true,
      data: paginatedResults.map((sub) => sub.toJSON()),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: subscriptions.length,
        totalPages: Math.ceil(subscriptions.length / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({
      success: false,
      error: "Fetch failed",
      message: "Unable to retrieve subscriptions.",
    });
  }
});

// GET /api/subscriptions/stats - Get subscription statistics
router.get("/stats", async (req, res) => {
  try {
    const stats = await Subscription.getStats();

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching subscription stats:", error);
    res.status(500).json({
      success: false,
      error: "Stats fetch failed",
      message: "Unable to retrieve subscription statistics.",
    });
  }
});

// POST /api/subscriptions/unsubscribe - Unsubscribe
router.post("/unsubscribe", validateEmail, async (req, res) => {
  try {
    const { email } = req.body;

    const subscription = await Subscription.unsubscribe(
      email.toLowerCase().trim(),
    );

    res.json({
      success: true,
      message: "Successfully unsubscribed from our newsletter.",
      data: subscription.toJSON(),
    });
  } catch (error) {
    console.error("Unsubscribe error:", error);

    if (
      error.message.includes("not found") ||
      error.message.includes("inactive")
    ) {
      return res.status(404).json({
        success: false,
        error: "Not found",
        message: "Email address not found in our subscription list.",
      });
    }

    res.status(500).json({
      success: false,
      error: "Unsubscribe failed",
      message: "Unable to process unsubscribe request. Please try again later.",
    });
  }
});

// GET /api/subscriptions/check/:email - Check subscription status
router.get("/check/:email", validateEmail, async (req, res) => {
  try {
    const email = req.params.email.toLowerCase().trim();
    const subscription = await Subscription.findByEmail(email);

    if (!subscription) {
      return res.json({
        success: true,
        subscribed: false,
        message: "Email address is not subscribed.",
      });
    }

    res.json({
      success: true,
      subscribed: subscription.is_active,
      data: {
        email: subscription.email,
        subscribed_at: subscription.subscribed_at,
        is_active: subscription.is_active,
      },
    });
  } catch (error) {
    console.error("Check subscription error:", error);
    res.status(500).json({
      success: false,
      error: "Check failed",
      message: "Unable to check subscription status.",
    });
  }
});

// DELETE /api/subscriptions/:email - Hard delete subscription (admin only)
router.delete("/:email", validateEmail, async (req, res) => {
  try {
    const email = req.params.email.toLowerCase().trim();

    const result = await Subscription.delete(email);

    res.json({
      success: true,
      message: "Subscription permanently deleted.",
      data: result,
    });
  } catch (error) {
    console.error("Delete subscription error:", error);

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: "Not found",
        message: "Email address not found in our subscription list.",
      });
    }

    res.status(500).json({
      success: false,
      error: "Delete failed",
      message: "Unable to delete subscription. Please try again later.",
    });
  }
});

export default router;
