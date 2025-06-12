#!/usr/bin/env python3

"""
Simple Python backend for email subscriptions
This is a simplified version that works without virtual environments
"""

import json
import sqlite3
import os
import time
from datetime import datetime
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import threading

# Ensure data directory exists
os.makedirs("data", exist_ok=True)
DATABASE_PATH = "data/subscriptions.db"

class SubscriptionDB:
    def __init__(self):
        self.init_db()
    
    def init_db(self):
        """Initialize the database"""
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        # Create subscriptions table
        cursor.execute("""
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
        
        # Create indexes
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_subscriptions_email ON subscriptions(email)")
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_subscriptions_active ON subscriptions(is_active)")
        
        conn.commit()
        conn.close()
        print("✅ Database initialized successfully")
    
    def create_subscription(self, email, source="website", ip_address=None, user_agent=None):
        """Create a new subscription"""
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        try:
            cursor.execute("""
                INSERT INTO subscriptions (email, source, ip_address, user_agent) 
                VALUES (?, ?, ?, ?)
            """, (email.lower(), source, ip_address, user_agent))
            
            subscription_id = cursor.lastrowid
            conn.commit()
            
            # Fetch the created subscription
            cursor.execute("""
                SELECT id, email, subscribed_at, is_active, source, created_at, updated_at
                FROM subscriptions WHERE id = ?
            """, (subscription_id,))
            
            row = cursor.fetchone()
            conn.close()
            
            if row:
                return {
                    "id": row[0],
                    "email": row[1],
                    "subscribed_at": row[2],
                    "is_active": bool(row[3]),
                    "source": row[4],
                    "created_at": row[5],
                    "updated_at": row[6]
                }
        
        except sqlite3.IntegrityError:
            conn.close()
            # Check if already subscribed
            existing = self.get_subscription_by_email(email)
            if existing and existing["is_active"]:
                raise ValueError("Email is already subscribed")
            elif existing and not existing["is_active"]:
                return self.reactivate_subscription(email)
        
        except Exception as e:
            conn.close()
            raise e
    
    def get_subscription_by_email(self, email):
        """Get subscription by email"""
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT id, email, subscribed_at, is_active, source, created_at, updated_at
            FROM subscriptions WHERE email = ?
        """, (email.lower(),))
        
        row = cursor.fetchone()
        conn.close()
        
        if row:
            return {
                "id": row[0],
                "email": row[1],
                "subscribed_at": row[2],
                "is_active": bool(row[3]),
                "source": row[4],
                "created_at": row[5],
                "updated_at": row[6]
            }
        return None
    
    def get_stats(self):
        """Get subscription statistics"""
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        # Total active
        cursor.execute("SELECT COUNT(*) FROM subscriptions WHERE is_active = 1")
        total_active = cursor.fetchone()[0]
        
        # Total inactive
        cursor.execute("SELECT COUNT(*) FROM subscriptions WHERE is_active = 0")
        total_inactive = cursor.fetchone()[0]
        
        # Recent subscriptions
        cursor.execute("""
            SELECT COUNT(*) FROM subscriptions 
            WHERE is_active = 1 AND created_at >= date('now', '-30 days')
        """)
        recent_30_days = cursor.fetchone()[0]
        
        # By source
        cursor.execute("""
            SELECT source, COUNT(*) as count FROM subscriptions 
            WHERE is_active = 1 GROUP BY source ORDER BY count DESC
        """)
        by_source = [{"source": row[0], "count": row[1]} for row in cursor.fetchall()]
        
        conn.close()
        
        return {
            "total_active": total_active,
            "total_inactive": total_inactive,
            "recent_30_days": recent_30_days,
            "by_source": by_source
        }
    
    def reactivate_subscription(self, email):
        """Reactivate a subscription"""
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        cursor.execute("""
            UPDATE subscriptions 
            SET is_active = 1, unsubscribed_at = NULL, updated_at = CURRENT_TIMESTAMP
            WHERE email = ?
        """, (email.lower(),))
        
        conn.commit()
        conn.close()
        
        return self.get_subscription_by_email(email)

class APIHandler(BaseHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        self.db = SubscriptionDB()
        super().__init__(*args, **kwargs)
    
    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self.send_cors_headers()
        self.end_headers()
    
    def send_cors_headers(self):
        """Send CORS headers"""
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:8080')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Allow-Credentials', 'true')
    
    def send_json_response(self, data, status_code=200):
        """Send JSON response"""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    def get_request_body(self):
        """Get request body as JSON"""
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length:
            body = self.rfile.read(content_length)
            return json.loads(body.decode())
        return {}
    
    def do_GET(self):
        """Handle GET requests"""
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        if path == '/health':
            self.send_json_response({
                "status": "OK",
                "timestamp": time.time(),
                "message": "Python Backend is running"
            })
        
        elif path == '/api/subscriptions/stats':
            try:
                stats = self.db.get_stats()
                self.send_json_response({
                    "success": True,
                    "data": stats
                })
            except Exception as e:
                self.send_json_response({
                    "success": False,
                    "error": "Stats fetch failed",
                    "message": str(e)
                }, 500)
        
        elif path.startswith('/api/subscriptions/check/'):
            email = path.split('/')[-1]
            try:
                subscription = self.db.get_subscription_by_email(email)
                if not subscription:
                    self.send_json_response({
                        "success": True,
                        "subscribed": False,
                        "message": "Email address is not subscribed."
                    })
                else:
                    self.send_json_response({
                        "success": True,
                        "subscribed": subscription["is_active"],
                        "data": {
                            "email": subscription["email"],
                            "subscribed_at": subscription["subscribed_at"],
                            "is_active": subscription["is_active"]
                        }
                    })
            except Exception as e:
                self.send_json_response({
                    "success": False,
                    "error": "Check failed",
                    "message": str(e)
                }, 500)
        
        else:
            self.send_json_response({
                "error": "Route not found",
                "message": f"The requested endpoint {self.command} {self.path} does not exist."
            }, 404)
    
    def do_POST(self):
        """Handle POST requests"""
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        if path == '/api/subscriptions':
            try:
                data = self.get_request_body()
                email = data.get('email', '').strip().lower()
                source = data.get('source', 'website')
                
                if not email:
                    self.send_json_response({
                        "success": False,
                        "error": "Validation failed",
                        "message": "Email address is required"
                    }, 400)
                    return
                
                # Simple email validation
                if '@' not in email or '.' not in email.split('@')[-1]:
                    self.send_json_response({
                        "success": False,
                        "error": "Validation failed",
                        "message": "Please provide a valid email address"
                    }, 400)
                    return
                
                # Get client info
                ip_address = self.client_address[0]
                user_agent = self.headers.get('User-Agent', '')
                
                result = self.db.create_subscription(email, source, ip_address, user_agent)
                
                self.send_json_response({
                    "success": True,
                    "message": "Successfully subscribed to our newsletter!",
                    "data": result
                })
                
            except ValueError as e:
                if "already subscribed" in str(e):
                    self.send_json_response({
                        "success": False,
                        "error": "Already subscribed",
                        "message": "This email address is already subscribed to our newsletter."
                    }, 409)
                else:
                    self.send_json_response({
                        "success": False,
                        "error": "Subscription failed",
                        "message": str(e)
                    }, 400)
            
            except Exception as e:
                self.send_json_response({
                    "success": False,
                    "error": "Subscription failed",
                    "message": "Unable to process subscription. Please try again later."
                }, 500)
        
        else:
            self.send_json_response({
                "error": "Route not found",
                "message": f"The requested endpoint {self.command} {self.path} does not exist."
            }, 404)

def run_server():
    """Run the HTTP server"""
    port = int(os.getenv('PORT', 3001))
    server_address = ('', port)
    httpd = HTTPServer(server_address, APIHandler)
    
    print(f"🐍 Python Backend Server Started!")
    print(f"🚀 Server running on port {port}")
    print(f"📊 Health check: http://localhost:{port}/health")
    print(f"📧 Subscriptions API: http://localhost:{port}/api/subscriptions")
    print(f"🌍 Environment: {os.getenv('NODE_ENV', 'development')}")
    print(f"🛑 Press Ctrl+C to stop the server")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Shutting down server...")
        httpd.shutdown()

if __name__ == '__main__':
    run_server()
