# 🚀 Start Your Python Backend

Since I can't run long-running processes in this environment, you'll need to start the backend manually in your terminal.

## 🐍 Option 1: Simple Python Backend (No Dependencies)

**In your terminal, run:**

```bash
python3 simple_backend.py
```

This will start a simple Python backend server that:

- ✅ Runs on port 3001
- ✅ Has all the same API endpoints
- ✅ Uses SQLite database
- ✅ Supports CORS for your frontend
- ✅ **Requires no additional installations**

## 🚀 Option 2: Full FastAPI Backend (Recommended)

**In your terminal, run:**

```bash
cd backend_python

# Create virtual environment (first time only)
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies (first time only)
pip install -r requirements.txt

# Start the server
python main.py
```

## ✅ Verify Backend is Running

Once started, you should see:

```
🐍 Python Backend Server Started!
🚀 Server running on port 3001
📊 Health check: http://localhost:3001/health
📧 Subscriptions API: http://localhost:3001/api/subscriptions
🛑 Press Ctrl+C to stop the server
```

## 🧪 Test the Backend

1. **Health Check:**

   ```bash
   curl http://localhost:3001/health
   ```

2. **Test Subscription:**

   ```bash
   curl -X POST http://localhost:3001/api/subscriptions \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com", "source": "website"}'
   ```

3. **Check Stats:**
   ```bash
   curl http://localhost:3001/api/subscriptions/stats
   ```

## 🔗 Connect to Frontend

Your frontend is already configured to use the backend at `http://localhost:3001`, so once the backend is running:

1. Go to your website
2. Try subscribing to the newsletter (footer or News & Insights page)
3. You should see success messages

## 🎯 Which Backend to Choose?

### Simple Python Backend (`python3 simple_backend.py`):

- ✅ **Pros:** No dependencies, quick start, works immediately
- ❌ **Cons:** Basic features, no auto-documentation

### Full FastAPI Backend (`cd backend_python && python main.py`):

- ✅ **Pros:** Full features, auto-documentation at `/docs`, better validation
- ❌ **Cons:** Requires installing dependencies

## 🔧 Troubleshooting

### Backend not starting?

```bash
# Check if port 3001 is in use
lsof -i :3001

# Kill any process using port 3001
kill -9 $(lsof -t -i:3001)
```

### Frontend can't connect?

- Make sure backend is running on port 3001
- Check that CORS is working (backend logs should show requests)
- Verify your frontend is on http://localhost:8080

## 🌟 What's Next?

Once your backend is running:

1. **Test the subscription forms** on your website
2. **Check the database** - data will be stored in `data/subscriptions.db`
3. **View API docs** (FastAPI only) at http://localhost:3001/docs
4. **Monitor subscriptions** with the stats endpoint

Your Python backend is ready! Choose the option that works best for you and start it in your terminal.
