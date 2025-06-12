from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from fastapi import Request, Response
from fastapi.responses import JSONResponse

def custom_key_func(request: Request):
    """Custom key function for rate limiting based on IP address"""
    return get_remote_address(request)

# Create limiter instance
limiter = Limiter(
    key_func=custom_key_func,
    default_limits=["1000/15minutes"]  # Global rate limit
)

def subscription_key_func(request: Request):
    """Custom key function for subscription-specific rate limiting"""
    ip = get_remote_address(request)
    # For subscription endpoints, we can add email-based limiting
    return f"subscription:{ip}"

def email_key_func(request: Request):
    """Key function for email-specific rate limiting"""
    ip = get_remote_address(request)
    # This would need to be enhanced to include email from request body
    return f"email:{ip}"

# Custom rate limit exceeded handler
def custom_rate_limit_exceeded_handler(request: Request, exc):
    """Custom handler for rate limit exceeded"""
    return JSONResponse(
        status_code=429,
        content={
            "success": False,
            "error": "Rate limit exceeded",
            "message": "Too many requests. Please try again later.",
            "retry_after": str(exc.retry_after) if hasattr(exc, 'retry_after') else "60 seconds"
        }
    )
