#!/bin/bash

echo "🚀 Starting Technum Opus Backend Server..."
echo "📊 Database will be created automatically"
echo "🔗 API will be available at: http://localhost:3001"
echo "💻 Frontend should be running at: http://localhost:8080"
echo ""
echo "To stop the server, press Ctrl+C"
echo ""

cd backend

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file from template..."
    cp .env.example .env
fi

# Start the server
echo "Starting server..."
npm run dev
