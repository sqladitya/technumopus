import Joi from "joi";

// Email validation schema
const emailSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .required()
    .max(254) // RFC 5321 limit
    .messages({
      "string.email": "Please provide a valid email address",
      "string.empty": "Email address is required",
      "string.max": "Email address is too long",
      "any.required": "Email address is required",
    }),
});

// Subscription validation schema
const subscriptionSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .required()
    .max(254)
    .messages({
      "string.email": "Please provide a valid email address",
      "string.empty": "Email address is required",
      "string.max": "Email address is too long",
      "any.required": "Email address is required",
    }),
  source: Joi.string()
    .valid("website", "footer", "newsletter", "popup", "api")
    .default("website")
    .messages({
      "any.only": "Invalid subscription source",
    }),
});

// Middleware to validate subscription data
export const validateSubscription = (req, res, next) => {
  const { error, value } = subscriptionSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => ({
      field: detail.path.join("."),
      message: detail.message,
    }));

    return res.status(400).json({
      success: false,
      error: "Validation failed",
      message: "Please check your input and try again.",
      details: errors,
    });
  }

  // Replace request body with validated and sanitized data
  req.body = value;
  next();
};

// Middleware to validate email (for params or single email requests)
export const validateEmail = (req, res, next) => {
  let email;

  // Check if email is in body or params
  if (req.body && req.body.email) {
    email = req.body.email;
  } else if (req.params && req.params.email) {
    email = req.params.email;
  } else {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      message: "Email address is required.",
    });
  }

  const { error, value } = emailSchema.validate(
    { email },
    {
      stripUnknown: true,
    },
  );

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      message: errorMessage,
    });
  }

  // Update the email in the appropriate location
  if (req.body && req.body.email) {
    req.body.email = value.email;
  }
  if (req.params && req.params.email) {
    req.params.email = value.email;
  }

  next();
};

// Additional validation helpers
export const isValidEmail = (email) => {
  const { error } = emailSchema.validate({ email });
  return !error;
};

export const sanitizeEmail = (email) => {
  if (!email || typeof email !== "string") {
    return null;
  }

  return email.toLowerCase().trim();
};

// Common email validation patterns
export const emailPatterns = {
  // Basic email regex (less strict for client-side)
  basic: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // More comprehensive pattern
  comprehensive:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};

export default {
  validateSubscription,
  validateEmail,
  isValidEmail,
  sanitizeEmail,
  emailPatterns,
};
