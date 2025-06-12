# 🚀 Backend Setup Instructions

## Problem Identified

The frontend is trying to connect to the backend API at `http://localhost:3001`, but the backend server is not running. This causes a "Failed to fetch" error when users try to subscribe to the newsletter.

## ✅ Quick Fix

### Option 1: Manual Backend Start

Open a **new terminal/command prompt** and run:

```bash
cd backend
npm run dev
```

You should see output like:

```
✅ Database initialized successfully
🚀 Server running on port 3001
📊 Health check: http://localhost:3001/health
📧 Subscriptions API: http://localhost:3001/api/subscriptions
🌍 Environment: development
```

### Option 2: Using the startup script

```bash
./run-backend.sh
```

## 🔍 Verify Backend is Running

1. **Check health endpoint:**

   ```bash
   curl http://localhost:3001/health
   ```

2. **Expected response:**

   ```json
   {
     "status": "OK",
     "timestamp": "2024-06-12T07:20:00.000Z",
     "uptime": 123.456
   }
   ```

3. **Look for the DevHelper indicator** in the bottom-right corner of your website (development only)

## 🧪 Test the Subscription

Once the backend is running:

1. Go to your website at `http://localhost:8080`
2. Scroll to the footer or visit the "News & Insights" page
3. Try subscribing with an email address
4. You should see a success message

## 📊 View Subscription Data

Check stored subscriptions:

```bash
curl http://localhost:3001/api/subscriptions/stats
```

## 🔧 Troubleshooting

### Backend Won't Start

1. **Check Node.js version:**

   ```bash
   node --version
   # Should be 18+
   ```

2. **Reinstall dependencies:**

   ```bash
   cd backend
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check for port conflicts:**
   ```bash
   lsof -i :3001
   # Kill any process using port 3001
   ```

### Database Issues

1. **Reset database:**
   ```bash
   cd backend
   rm -rf data/
   npm run db:migrate
   ```

### CORS Issues

The backend is configured to accept requests from `http://localhost:8080`. If your frontend runs on a different port, update `backend/.env`:

```
FRONTEND_URL=http://localhost:YOUR_PORT
```

## 🏗️ Architecture

```
Frontend (Port 8080)  →  Backend (Port 3001)  →  SQLite Database
     ↓                          ↓                        ↓
 React/Vite              Express/Node.js         data/subscriptions.db
```

## 📁 Files Involved

- `backend/server.js` - Main server file
- `backend/.env` - Environment configuration
- `src/lib/api.ts` - Frontend API client
- `src/hooks/useSubscription.ts` - React hook for subscriptions
- `src/components/DevHelper.tsx` - Development helper (shows backend status)

## 🔄 Development Workflow

1. **Start frontend:** `npm run dev` (already running)
2. **Start backend:** `cd backend && npm run dev`
3. **Both servers running:** Frontend + Backend = Full functionality

## 🌐 Production Deployment

For production, you'll need to:

1. **Deploy backend** to a hosting service (Heroku, Railway, DigitalOcean, etc.)
2. **Update frontend environment** to point to production backend URL
3. **Update CORS settings** in backend to allow production frontend domain

Example production `.env`:

```
VITE_API_URL=https://your-backend-domain.com
```
