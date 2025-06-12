from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field
from enum import Enum

class SubscriptionSource(str, Enum):
    website = "website"
    footer = "footer"
    newsletter = "newsletter"
    popup = "popup"
    api = "api"

class SubscriptionCreate(BaseModel):
    email: EmailStr
    source: SubscriptionSource = SubscriptionSource.website

class SubscriptionResponse(BaseModel):
    id: int
    email: str
    subscribed_at: datetime
    is_active: bool
    source: str
    created_at: datetime
    updated_at: datetime

class SubscriptionStats(BaseModel):
    total_active: int
    total_inactive: int
    recent_30_days: int
    by_source: List[dict]

class UnsubscribeRequest(BaseModel):
    email: EmailStr

class EmailCheck(BaseModel):
    email: EmailStr

class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None
    error: Optional[str] = None

class SubscriptionListResponse(BaseModel):
    success: bool
    data: List[SubscriptionResponse]
    pagination: dict

class HealthResponse(BaseModel):
    status: str
    timestamp: float
    message: str = "API is healthy"

class ErrorDetail(BaseModel):
    field: str
    message: str

class ValidationErrorResponse(BaseModel):
    success: bool = False
    error: str = "Validation failed"
    message: str
    details: List[ErrorDetail]

# Database model (for internal use)
class SubscriptionDB(BaseModel):
    id: Optional[int] = None
    email: str
    subscribed_at: Optional[datetime] = None
    is_active: bool = True
    source: str = "website"
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    unsubscribed_at: Optional[datetime] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
