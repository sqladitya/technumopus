import aiosqlite
import os
from datetime import datetime
from typing import List, Optional
from models import SubscriptionDB, SubscriptionResponse

DATABASE_PATH = os.getenv("DATABASE_PATH", "./data/subscriptions.db")

async def get_db_connection():
    """Get database connection"""
    # Ensure data directory exists
    os.makedirs(os.path.dirname(DATABASE_PATH), exist_ok=True)
    return await aiosqlite.connect(DATABASE_PATH)

async def init_db():
    """Initialize database with required tables and indexes"""
    async with await get_db_connection() as db:
        # Create subscriptions table
        await db.execute("""
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
        """)

        # Create indexes for better performance
        await db.execute("""
            CREATE INDEX IF NOT EXISTS idx_subscriptions_email 
            ON subscriptions(email)
        """)

        await db.execute("""
            CREATE INDEX IF NOT EXISTS idx_subscriptions_active 
            ON subscriptions(is_active)
        """)

        await db.execute("""
            CREATE INDEX IF NOT EXISTS idx_subscriptions_created 
            ON subscriptions(created_at)
        """)

        # Create trigger to update updated_at timestamp
        await db.execute("""
            CREATE TRIGGER IF NOT EXISTS update_subscriptions_timestamp 
            AFTER UPDATE ON subscriptions
            BEGIN
                UPDATE subscriptions SET updated_at = CURRENT_TIMESTAMP 
                WHERE id = NEW.id;
            END
        """)

        await db.commit()

class SubscriptionService:
    @staticmethod
    async def create_subscription(email: str, source: str = "website", 
                                ip_address: str = None, user_agent: str = None) -> SubscriptionResponse:
        """Create a new subscription"""
        async with await get_db_connection() as db:
            try:
                cursor = await db.execute("""
                    INSERT INTO subscriptions (email, source, ip_address, user_agent) 
                    VALUES (?, ?, ?, ?)
                """, (email.lower(), source, ip_address, user_agent))
                
                subscription_id = cursor.lastrowid
                await db.commit()
                
                # Fetch the created subscription
                return await SubscriptionService.get_subscription_by_id(subscription_id)
                
            except aiosqlite.IntegrityError:
                # Handle unique constraint error
                existing = await SubscriptionService.get_subscription_by_email(email)
                if existing and existing.is_active:
                    raise ValueError("Email is already subscribed")
                elif existing and not existing.is_active:
                    # Reactivate the subscription
                    return await SubscriptionService.reactivate_subscription(email)
                else:
                    raise ValueError("Subscription creation failed")

    @staticmethod
    async def get_subscription_by_id(subscription_id: int) -> Optional[SubscriptionResponse]:
        """Get subscription by ID"""
        async with await get_db_connection() as db:
            cursor = await db.execute("""
                SELECT id, email, subscribed_at, is_active, source, created_at, updated_at
                FROM subscriptions WHERE id = ?
            """, (subscription_id,))
            
            row = await cursor.fetchone()
            if row:
                return SubscriptionResponse(
                    id=row[0],
                    email=row[1],
                    subscribed_at=datetime.fromisoformat(row[2]),
                    is_active=bool(row[3]),
                    source=row[4],
                    created_at=datetime.fromisoformat(row[5]),
                    updated_at=datetime.fromisoformat(row[6])
                )
            return None

    @staticmethod
    async def get_subscription_by_email(email: str) -> Optional[SubscriptionResponse]:
        """Get subscription by email"""
        async with await get_db_connection() as db:
            cursor = await db.execute("""
                SELECT id, email, subscribed_at, is_active, source, created_at, updated_at
                FROM subscriptions WHERE email = ?
            """, (email.lower(),))
            
            row = await cursor.fetchone()
            if row:
                return SubscriptionResponse(
                    id=row[0],
                    email=row[1],
                    subscribed_at=datetime.fromisoformat(row[2]),
                    is_active=bool(row[3]),
                    source=row[4],
                    created_at=datetime.fromisoformat(row[5]),
                    updated_at=datetime.fromisoformat(row[6])
                )
            return None

    @staticmethod
    async def get_active_subscriptions(limit: int = 50, offset: int = 0) -> List[SubscriptionResponse]:
        """Get all active subscriptions with pagination"""
        async with await get_db_connection() as db:
            cursor = await db.execute("""
                SELECT id, email, subscribed_at, is_active, source, created_at, updated_at
                FROM subscriptions 
                WHERE is_active = 1 
                ORDER BY created_at DESC 
                LIMIT ? OFFSET ?
            """, (limit, offset))
            
            rows = await cursor.fetchall()
            return [
                SubscriptionResponse(
                    id=row[0],
                    email=row[1],
                    subscribed_at=datetime.fromisoformat(row[2]),
                    is_active=bool(row[3]),
                    source=row[4],
                    created_at=datetime.fromisoformat(row[5]),
                    updated_at=datetime.fromisoformat(row[6])
                )
                for row in rows
            ]

    @staticmethod
    async def get_subscription_stats() -> dict:
        """Get subscription statistics"""
        async with await get_db_connection() as db:
            # Total active
            cursor = await db.execute("SELECT COUNT(*) FROM subscriptions WHERE is_active = 1")
            total_active = (await cursor.fetchone())[0]
            
            # Total inactive
            cursor = await db.execute("SELECT COUNT(*) FROM subscriptions WHERE is_active = 0")
            total_inactive = (await cursor.fetchone())[0]
            
            # Recent subscriptions (last 30 days)
            cursor = await db.execute("""
                SELECT COUNT(*) FROM subscriptions 
                WHERE is_active = 1 AND created_at >= date('now', '-30 days')
            """)
            recent_30_days = (await cursor.fetchone())[0]
            
            # Subscriptions by source
            cursor = await db.execute("""
                SELECT source, COUNT(*) as count FROM subscriptions 
                WHERE is_active = 1 GROUP BY source ORDER BY count DESC
            """)
            by_source_rows = await cursor.fetchall()
            by_source = [{"source": row[0], "count": row[1]} for row in by_source_rows]
            
            return {
                "total_active": total_active,
                "total_inactive": total_inactive,
                "recent_30_days": recent_30_days,
                "by_source": by_source
            }

    @staticmethod
    async def reactivate_subscription(email: str) -> SubscriptionResponse:
        """Reactivate a subscription"""
        async with await get_db_connection() as db:
            await db.execute("""
                UPDATE subscriptions 
                SET is_active = 1, unsubscribed_at = NULL, updated_at = CURRENT_TIMESTAMP
                WHERE email = ?
            """, (email.lower(),))
            await db.commit()
            
            return await SubscriptionService.get_subscription_by_email(email)

    @staticmethod
    async def unsubscribe(email: str) -> SubscriptionResponse:
        """Unsubscribe an email"""
        async with await get_db_connection() as db:
            cursor = await db.execute("""
                UPDATE subscriptions 
                SET is_active = 0, unsubscribed_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
                WHERE email = ? AND is_active = 1
            """, (email.lower(),))
            
            if cursor.rowcount == 0:
                raise ValueError("Subscription not found or already inactive")
            
            await db.commit()
            return await SubscriptionService.get_subscription_by_email(email)

    @staticmethod
    async def delete_subscription(email: str) -> bool:
        """Hard delete a subscription"""
        async with await get_db_connection() as db:
            cursor = await db.execute("DELETE FROM subscriptions WHERE email = ?", (email.lower(),))
            await db.commit()
            
            if cursor.rowcount == 0:
                raise ValueError("Subscription not found")
            
            return True
