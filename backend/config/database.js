import sqlite3 from "sqlite3";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const dbPath = process.env.DATABASE_PATH || "./data/subscriptions.db";
const dbDir = path.dirname(dbPath);

// Ensure data directory exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Promisify database methods
const dbRun = promisify(db.run.bind(db));
const dbGet = promisify(db.get.bind(db));
const dbAll = promisify(db.all.bind(db));

export { db, dbRun, dbGet, dbAll };

export async function initializeDatabase() {
  try {
    // Create subscriptions table
    await dbRun(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT 1,
        source TEXT DEFAULT 'website',
        ip_address TEXT,
        user_agent TEXT,
        unsubscribed_at DATETIME NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes for better performance
    await dbRun(`
      CREATE INDEX IF NOT EXISTS idx_subscriptions_email 
      ON subscriptions(email)
    `);

    await dbRun(`
      CREATE INDEX IF NOT EXISTS idx_subscriptions_active 
      ON subscriptions(is_active)
    `);

    await dbRun(`
      CREATE INDEX IF NOT EXISTS idx_subscriptions_created 
      ON subscriptions(created_at)
    `);

    // Create trigger to update updated_at timestamp
    await dbRun(`
      CREATE TRIGGER IF NOT EXISTS update_subscriptions_timestamp 
      AFTER UPDATE ON subscriptions
      BEGIN
        UPDATE subscriptions SET updated_at = CURRENT_TIMESTAMP 
        WHERE id = NEW.id;
      END
    `);

    console.log("Database tables and indexes created successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Graceful database shutdown
export function closeDatabase() {
  return new Promise((resolve, reject) => {
    db.close((err) => {
      if (err) {
        console.error("Error closing database:", err.message);
        reject(err);
      } else {
        console.log("Database connection closed");
        resolve();
      }
    });
  });
}
