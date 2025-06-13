import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

// Import database
import { initializeDatabase } from "./config/postgres.js";

// Import routes
import subscriptionsRouter from "./routes/subscriptions.js";
import authRouter from "./routes/auth.js";
import contactRouter from "./routes/contact.js";
import adminJobsRouter from "./routes/admin/jobs.js";
import adminTeamRouter from "./routes/admin/team.js";
import adminSubmissionsRouter from "./routes/admin/submissions.js";
import adminDashboardRouter from "./routes/admin/dashboard.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy for rate limiting and IP detection
app.set("trust proxy", 1);

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      "http://localhost:3000",
      "http://localhost:5173", // Vite dev server
      "http://localhost:4173", // Vite preview
      "https://technumopus.com",
      "https://www.technumopus.com",
      process.env.FRONTEND_URL,
    ].filter(Boolean);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cors(corsOptions));

// Logging
app.use(morgan("combined"));

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts per windowMs
  message: {
    success: false,
    message: "Too many login attempts, please try again later",
  },
  skipSuccessfulRequests: true,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 contact form submissions per hour
  message: {
    success: false,
    message: "Too many form submissions, please try again later",
  },
});

// Apply rate limiting
app.use(generalLimiter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
  });
});

// API routes
app.use("/api/subscriptions", subscriptionsRouter);
app.use("/api/auth", authLimiter, authRouter);
app.use("/api/contact", contactLimiter, contactRouter);

// Admin routes (protected)
app.use("/api/admin/jobs", adminJobsRouter);
app.use("/api/admin/team", adminTeamRouter);
app.use("/api/admin/submissions", adminSubmissionsRouter);
app.use("/api/admin/dashboard", adminDashboardRouter);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.originalUrl,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);

  // Handle specific error types
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      details: err.details,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS policy violation",
    });
  }

  // Default error response
  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\nShutting down gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Shutting down gracefully...");
  process.exit(0);
});

// Start server
async function startServer() {
  try {
    // Initialize database
    console.log("Initializing database...");
    await initializeDatabase();

    // Start server
    app.listen(PORT, () => {
      console.log(`
🚀 Server is running on port ${PORT}
📊 Environment: ${process.env.NODE_ENV || "development"}
🔗 API Base URL: http://localhost:${PORT}
🏥 Health Check: http://localhost:${PORT}/health
📝 Admin API: http://localhost:${PORT}/api/admin
      `);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
