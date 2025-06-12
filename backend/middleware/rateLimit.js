import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

// Global rate limiting
export const globalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: {
    success: false,
    error: "Too many requests",
    message: "Too many requests from this IP, please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      error: "Too many requests",
      message: "Too many requests from this IP, please try again later.",
      retryAfter: "15 minutes",
    });
  },
});

// Specific rate limiting for subscription endpoints
export const subscriptionRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 subscription attempts per hour
  message: {
    success: false,
    error: "Too many subscription attempts",
    message:
      "Too many subscription attempts from this IP. Please try again in an hour.",
    retryAfter: "1 hour",
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      error: "Too many subscription attempts",
      message:
        "Too many subscription attempts from this IP. Please try again in an hour.",
      retryAfter: "1 hour",
    });
  },
  // Skip rate limiting for successful requests to allow legitimate retries
  skipSuccessfulRequests: true,
});

// Email-specific rate limiting (more granular)
export const emailRateLimit = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3, // Limit each IP to 3 subscription attempts per day per email
  keyGenerator: (req) => {
    // Create a composite key based on IP and email
    const email = req.body?.email || req.params?.email || "unknown";
    return `${req.ip}_${email.toLowerCase()}`;
  },
  message: {
    success: false,
    error: "Daily limit exceeded",
    message:
      "Daily subscription limit exceeded for this email. Please try again tomorrow.",
    retryAfter: "24 hours",
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      error: "Daily limit exceeded",
      message:
        "Daily subscription limit exceeded for this email. Please try again tomorrow.",
      retryAfter: "24 hours",
    });
  },
});

// Slow down middleware for repeated requests
export const subscriptionSlowDown = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 2, // Allow 2 requests per windowMs without delay
  delayMs: 500, // Add 500ms delay per request after delayAfter
  maxDelayMs: 5000, // Maximum delay of 5 seconds
  headers: true,
  onLimitReached: (req, res, options) => {
    console.warn(`Slow down triggered for IP: ${req.ip}`);
  },
});

// Admin route rate limiting (more restrictive)
export const adminRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit admin routes to 100 requests per 15 minutes
  message: {
    success: false,
    error: "Admin rate limit exceeded",
    message: "Too many admin requests. Please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Create a custom rate limiter factory
export const createRateLimit = (options) => {
  const defaultOptions = {
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        success: false,
        error: "Rate limit exceeded",
        message: "Too many requests. Please try again later.",
        retryAfter: Math.ceil(options.windowMs / (60 * 1000)) + " minutes",
      });
    },
  };

  return rateLimit({ ...defaultOptions, ...options });
};

// Export combined middleware for subscription routes
export const subscriptionMiddleware = [
  subscriptionSlowDown,
  subscriptionRateLimit,
  emailRateLimit,
];

export default {
  globalRateLimit,
  subscriptionRateLimit,
  emailRateLimit,
  subscriptionSlowDown,
  adminRateLimit,
  subscriptionMiddleware,
  createRateLimit,
};
