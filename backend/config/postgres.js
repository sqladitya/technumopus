import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

// PostgreSQL connection configuration
const pool = new Pool({
  user: process.env.DB_USER || "technumopus",
  password: process.env.DB_PASSWORD || "onified1opustechnum",
  host: process.env.DB_HOST || "44.205.19.83",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "technumopus.com",
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test database connection
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// Initialize database tables
export async function initializeDatabase() {
  const client = await pool.connect();

  try {
    // Create admin users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        full_name VARCHAR(255),
        role VARCHAR(50) DEFAULT 'admin',
        is_active BOOLEAN DEFAULT true,
        last_login TIMESTAMP WITH TIME ZONE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create jobs table
    await client.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        level VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        requirements TEXT[],
        benefits TEXT[],
        salary VARCHAR(100),
        status VARCHAR(20) DEFAULT 'active',
        applications_count INTEGER DEFAULT 0,
        created_by INTEGER REFERENCES admin_users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create team_members table
    await client.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        department VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(50),
        bio TEXT,
        skills TEXT[],
        image_url TEXT,
        linkedin_url TEXT,
        twitter_url TEXT,
        status VARCHAR(20) DEFAULT 'active',
        join_date DATE,
        created_by INTEGER REFERENCES admin_users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create contact_submissions table
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        type VARCHAR(20) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        category VARCHAR(100),
        project_type VARCHAR(100),
        budget VARCHAR(100),
        timeline VARCHAR(100),
        preferred_date DATE,
        preferred_time VARCHAR(50),
        message TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'new',
        ip_address INET,
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create content_pages table for dynamic content management
    await client.query(`
      CREATE TABLE IF NOT EXISTS content_pages (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        meta_description TEXT,
        meta_keywords TEXT,
        content JSONB,
        status VARCHAR(20) DEFAULT 'published',
        created_by INTEGER REFERENCES admin_users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create analytics table
    await client.query(`
      CREATE TABLE IF NOT EXISTS analytics (
        id SERIAL PRIMARY KEY,
        page_path VARCHAR(500) NOT NULL,
        visitor_id VARCHAR(255),
        ip_address INET,
        user_agent TEXT,
        referrer TEXT,
        session_duration INTEGER,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes for better performance
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_jobs_department ON jobs(department)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_team_members_status ON team_members(status)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_team_members_department ON team_members(department)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_contact_submissions_type ON contact_submissions(type)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_content_pages_slug ON content_pages(slug)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_content_pages_status ON content_pages(status)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_analytics_page_path ON analytics(page_path)",
    );
    await client.query(
      "CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at)",
    );

    // Create triggers for updated_at timestamps
    await client.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql';
    `);

    const tables = [
      "admin_users",
      "jobs",
      "team_members",
      "contact_submissions",
      "content_pages",
    ];
    for (const table of tables) {
      await client.query(`
        DROP TRIGGER IF EXISTS update_${table}_updated_at ON ${table};
        CREATE TRIGGER update_${table}_updated_at
          BEFORE UPDATE ON ${table}
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column();
      `);
    }

    console.log("PostgreSQL database tables and indexes created successfully");
  } catch (error) {
    console.error("Error initializing PostgreSQL database:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Graceful database shutdown
export async function closeDatabase() {
  try {
    await pool.end();
    console.log("PostgreSQL connection pool closed");
  } catch (error) {
    console.error("Error closing PostgreSQL pool:", error);
    throw error;
  }
}

export default pool;
