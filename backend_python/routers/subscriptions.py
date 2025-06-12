from fastapi import APIRouter, HTTPException, Request, Depends
from fastapi.responses import JSONResponse
from typing import Optional
import logging

from models import (
    SubscriptionCreate, SubscriptionResponse, SubscriptionStats,
    UnsubscribeRequest, EmailCheck, ApiResponse, SubscriptionListResponse
)
from database import SubscriptionService
from middleware.rate_limit import limiter

router = APIRouter()

def get_client_info(request: Request):
    """Extract client IP and User-Agent"""
    ip_address = request.client.host
    user_agent = request.headers.get("user-agent", "")
    return ip_address, user_agent

@router.post("/", response_model=ApiResponse)
@limiter.limit("5/hour")  # 5 subscriptions per hour per IP
async def create_subscription(
    request: Request,
    subscription: SubscriptionCreate
):
    """Create a new newsletter subscription"""
    try:
        ip_address, user_agent = get_client_info(request)
        
        result = await SubscriptionService.create_subscription(
            email=subscription.email,
            source=subscription.source.value,
            ip_address=ip_address,
            user_agent=user_agent
        )
        
        return ApiResponse(
            success=True,
            message="Successfully subscribed to our newsletter!",
            data=result.model_dump()
        )
        
    except ValueError as e:
        error_message = str(e)
        if "already subscribed" in error_message:
            return JSONResponse(
                status_code=409,
                content={
                    "success": False,
                    "error": "Already subscribed",
                    "message": "This email address is already subscribed to our newsletter."
                }
            )
        
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "error": "Subscription failed",
                "message": error_message
            }
        )
    
    except Exception as e:
        logging.error(f"Subscription error: {e}")
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "error": "Subscription failed",
                "message": "Unable to process subscription. Please try again later."
            }
        )

@router.get("/", response_model=SubscriptionListResponse)
async def get_subscriptions(
    request: Request,
    page: int = 1,
    limit: int = 50,
    active: bool = True
):
    """Get all subscriptions (admin endpoint)"""
    try:
        offset = (page - 1) * limit
        
        if active:
            subscriptions = await SubscriptionService.get_active_subscriptions(limit, offset)
        else:
            # Would need to implement get_all_subscriptions for inactive ones
            subscriptions = await SubscriptionService.get_active_subscriptions(limit, offset)
        
        # Get total count for pagination
        stats = await SubscriptionService.get_subscription_stats()
        total = stats["total_active"] if active else stats["total_inactive"]
        
        return SubscriptionListResponse(
            success=True,
            data=subscriptions,
            pagination={
                "page": page,
                "limit": limit,
                "total": total,
                "total_pages": (total + limit - 1) // limit
            }
        )
        
    except Exception as e:
        logging.error(f"Error fetching subscriptions: {e}")
        raise HTTPException(
            status_code=500,
            detail={
                "success": False,
                "error": "Fetch failed",
                "message": "Unable to retrieve subscriptions."
            }
        )

@router.get("/stats")
async def get_subscription_stats(request: Request):
    """Get subscription statistics"""
    try:
        stats = await SubscriptionService.get_subscription_stats()
        
        return {
            "success": True,
            "data": stats
        }
        
    except Exception as e:
        logging.error(f"Error fetching subscription stats: {e}")
        raise HTTPException(
            status_code=500,
            detail={
                "success": False,
                "error": "Stats fetch failed",
                "message": "Unable to retrieve subscription statistics."
            }
        )

@router.post("/unsubscribe", response_model=ApiResponse)
async def unsubscribe_email(
    request: Request,
    unsubscribe_req: UnsubscribeRequest
):
    """Unsubscribe from newsletter"""
    try:
        result = await SubscriptionService.unsubscribe(unsubscribe_req.email)
        
        return ApiResponse(
            success=True,
            message="Successfully unsubscribed from our newsletter.",
            data=result.model_dump()
        )
        
    except ValueError as e:
        error_message = str(e)
        if "not found" in error_message or "inactive" in error_message:
            return JSONResponse(
                status_code=404,
                content={
                    "success": False,
                    "error": "Not found",
                    "message": "Email address not found in our subscription list."
                }
            )
        
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "error": "Unsubscribe failed",
                "message": error_message
            }
        )
    
    except Exception as e:
        logging.error(f"Unsubscribe error: {e}")
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "error": "Unsubscribe failed",
                "message": "Unable to process unsubscribe request. Please try again later."
            }
        )

@router.get("/check/{email}")
async def check_subscription_status(
    request: Request,
    email: str
):
    """Check if email is subscribed"""
    try:
        subscription = await SubscriptionService.get_subscription_by_email(email)
        
        if not subscription:
            return {
                "success": True,
                "subscribed": False,
                "message": "Email address is not subscribed."
            }
        
        return {
            "success": True,
            "subscribed": subscription.is_active,
            "data": {
                "email": subscription.email,
                "subscribed_at": subscription.subscribed_at.isoformat(),
                "is_active": subscription.is_active
            }
        }
        
    except Exception as e:
        logging.error(f"Check subscription error: {e}")
        raise HTTPException(
            status_code=500,
            detail={
                "success": False,
                "error": "Check failed",
                "message": "Unable to check subscription status."
            }
        )

@router.delete("/{email}")
async def delete_subscription(
    request: Request,
    email: str
):
    """Hard delete subscription (admin only)"""
    try:
        await SubscriptionService.delete_subscription(email)
        
        return {
            "success": True,
            "message": "Subscription permanently deleted.",
            "data": {"email": email}
        }
        
    except ValueError as e:
        if "not found" in str(e):
            return JSONResponse(
                status_code=404,
                content={
                    "success": False,
                    "error": "Not found",
                    "message": "Email address not found in our subscription list."
                }
            )
        
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "error": "Delete failed",
                "message": str(e)
            }
        )
    
    except Exception as e:
        logging.error(f"Delete subscription error: {e}")
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "error": "Delete failed",
                "message": "Unable to delete subscription. Please try again later."
            }
        )
