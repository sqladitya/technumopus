import os
import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
from dotenv import load_dotenv

from database import init_db, get_db_connection
from models import HealthResponse
from routers import subscriptions
from middleware.rate_limit import limiter
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

# Load environment variables
load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("🔄 Initializing database...")
    await init_db()
    print("✅ Database initialized successfully")
    
    yield
    
    # Shutdown
    print("🛑 Shutting down...")

# Create FastAPI app
app = FastAPI(
    title="Technum Opus API",
    description="Backend API for Technum Opus newsletter subscriptions",
    version="1.0.0",
    lifespan=lifespan
)

# Add rate limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("FRONTEND_URL", "http://localhost:8080"),
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8080"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Include routers
app.include_router(subscriptions.router, prefix="/api/subscriptions", tags=["subscriptions"])

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    import time
    return HealthResponse(
        status="OK",
        timestamp=time.time(),
        message="Technum Opus API is running"
    )

@app.get("/")
async def root():
    return {
        "message": "Technum Opus API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }

# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    print(f"Global exception: {exc}")
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "error": "Internal Server Error",
            "message": "Something went wrong!" if os.getenv("NODE_ENV") == "production" else str(exc)
        }
    )

if __name__ == "__main__":
    port = int(os.getenv("PORT", 3001))
    print(f"🚀 Starting Technum Opus API on port {port}")
    print(f"📊 Health check: http://localhost:{port}/health")
    print(f"📧 Subscriptions API: http://localhost:{port}/api/subscriptions")
    print(f"📚 API Documentation: http://localhost:{port}/docs")
    print(f"🌍 Environment: {os.getenv('NODE_ENV', 'development')}")
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=os.getenv("NODE_ENV") != "production",
        log_level="info"
    )
