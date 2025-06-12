#!/bin/bash

echo "🐍 Starting Technum Opus Python Backend Server..."
echo "📊 Database will be created automatically"
echo "🔗 API will be available at: http://localhost:3001"
echo "📚 API Documentation: http://localhost:3001/docs"
echo "💻 Frontend should be running at: http://localhost:8080"
echo ""
echo "To stop the server, press Ctrl+C"
echo ""

cd backend_python

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file from template..."
    cp .env.example .env 2>/dev/null || echo "# Environment variables" > .env
fi

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "🔧 Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

# Start the server
echo "🚀 Starting FastAPI server..."
python main.py
