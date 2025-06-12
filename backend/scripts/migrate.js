import { initializeDatabase, closeDatabase } from "../config/database.js";

async function runMigration() {
  try {
    console.log("🔄 Running database migration...");

    await initializeDatabase();

    console.log("✅ Database migration completed successfully!");
    console.log("📊 Database is ready to accept subscription requests");

    await closeDatabase();
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

runMigration();
