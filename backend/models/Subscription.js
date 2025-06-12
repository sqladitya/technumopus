import { dbRun, dbGet, dbAll } from "../config/database.js";

export class Subscription {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.subscribed_at = data.subscribed_at;
    this.is_active = data.is_active;
    this.source = data.source;
    this.ip_address = data.ip_address;
    this.user_agent = data.user_agent;
    this.unsubscribed_at = data.unsubscribed_at;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  // Create a new subscription
  static async create(subscriptionData) {
    const {
      email,
      source = "website",
      ip_address,
      user_agent,
    } = subscriptionData;

    try {
      const result = await dbRun(
        `INSERT INTO subscriptions (email, source, ip_address, user_agent) 
         VALUES (?, ?, ?, ?)`,
        [email, source, ip_address, user_agent],
      );

      return await Subscription.findById(result.lastID);
    } catch (error) {
      // Handle unique constraint error
      if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
        // Check if user is already subscribed
        const existing = await Subscription.findByEmail(email);
        if (existing && existing.is_active) {
          throw new Error("Email is already subscribed");
        } else if (existing && !existing.is_active) {
          // Reactivate the subscription
          return await Subscription.reactivate(email);
        }
      }
      throw error;
    }
  }

  // Find subscription by ID
  static async findById(id) {
    try {
      const row = await dbGet("SELECT * FROM subscriptions WHERE id = ?", [id]);
      return row ? new Subscription(row) : null;
    } catch (error) {
      throw new Error(`Error finding subscription by ID: ${error.message}`);
    }
  }

  // Find subscription by email
  static async findByEmail(email) {
    try {
      const row = await dbGet("SELECT * FROM subscriptions WHERE email = ?", [
        email.toLowerCase(),
      ]);
      return row ? new Subscription(row) : null;
    } catch (error) {
      throw new Error(`Error finding subscription by email: ${error.message}`);
    }
  }

  // Get all active subscriptions
  static async findAllActive() {
    try {
      const rows = await dbAll(
        "SELECT * FROM subscriptions WHERE is_active = 1 ORDER BY created_at DESC",
      );
      return rows.map((row) => new Subscription(row));
    } catch (error) {
      throw new Error(`Error finding active subscriptions: ${error.message}`);
    }
  }

  // Get subscription statistics
  static async getStats() {
    try {
      const totalActive = await dbGet(
        "SELECT COUNT(*) as count FROM subscriptions WHERE is_active = 1",
      );

      const totalInactive = await dbGet(
        "SELECT COUNT(*) as count FROM subscriptions WHERE is_active = 0",
      );

      const recentSubscriptions = await dbGet(
        `SELECT COUNT(*) as count FROM subscriptions 
         WHERE is_active = 1 AND created_at >= date('now', '-30 days')`,
      );

      const subscriptionsBySource = await dbAll(
        `SELECT source, COUNT(*) as count FROM subscriptions 
         WHERE is_active = 1 GROUP BY source ORDER BY count DESC`,
      );

      return {
        total_active: totalActive.count,
        total_inactive: totalInactive.count,
        recent_30_days: recentSubscriptions.count,
        by_source: subscriptionsBySource,
      };
    } catch (error) {
      throw new Error(`Error getting subscription stats: ${error.message}`);
    }
  }

  // Reactivate a subscription
  static async reactivate(email) {
    try {
      await dbRun(
        `UPDATE subscriptions 
         SET is_active = 1, unsubscribed_at = NULL, updated_at = CURRENT_TIMESTAMP
         WHERE email = ?`,
        [email.toLowerCase()],
      );

      return await Subscription.findByEmail(email);
    } catch (error) {
      throw new Error(`Error reactivating subscription: ${error.message}`);
    }
  }

  // Unsubscribe
  static async unsubscribe(email) {
    try {
      const result = await dbRun(
        `UPDATE subscriptions 
         SET is_active = 0, unsubscribed_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
         WHERE email = ? AND is_active = 1`,
        [email.toLowerCase()],
      );

      if (result.changes === 0) {
        throw new Error("Subscription not found or already inactive");
      }

      return await Subscription.findByEmail(email);
    } catch (error) {
      throw new Error(`Error unsubscribing: ${error.message}`);
    }
  }

  // Delete subscription (hard delete)
  static async delete(email) {
    try {
      const result = await dbRun("DELETE FROM subscriptions WHERE email = ?", [
        email.toLowerCase(),
      ]);

      if (result.changes === 0) {
        throw new Error("Subscription not found");
      }

      return { success: true, message: "Subscription deleted successfully" };
    } catch (error) {
      throw new Error(`Error deleting subscription: ${error.message}`);
    }
  }

  // Instance method to convert to JSON
  toJSON() {
    return {
      id: this.id,
      email: this.email,
      subscribed_at: this.subscribed_at,
      is_active: Boolean(this.is_active),
      source: this.source,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

export default Subscription;
