# Technum Opus - Full Stack Application

A modern full-stack React application with Node.js/Express backend for newsletter subscriptions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone and install dependencies:**

```bash
npm run setup
```

2. **Set up environment variables:**

```bash
# Frontend
cp .env.example .env

# Backend
cp backend/.env.example backend/.env
```

3. **Start the full application:**

```bash
npm run dev:full
```

This will start:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 📁 Project Structure

```
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   ├── pages/             # Route components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and API client
│   └── ...
├── backend/               # Node.js/Express backend
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── middleware/        # Express middleware
│   ├── config/            # Configuration files
│   └── scripts/           # Utility scripts
└── ...
```

## 🔧 Development

### Frontend Only

```bash
npm run dev
```

### Backend Only

```bash
npm run backend:dev
```

### Full Stack

```bash
npm run dev:full
```

## 📧 Newsletter Subscription API

### Endpoints

- `POST /api/subscriptions` - Subscribe to newsletter
- `GET /api/subscriptions` - Get all subscriptions (admin)
- `POST /api/subscriptions/unsubscribe` - Unsubscribe
- `GET /api/subscriptions/check/:email` - Check subscription status
- `GET /api/subscriptions/stats` - Get subscription statistics

### Example Usage

```javascript
// Subscribe
const response = await fetch("http://localhost:3001/api/subscriptions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "user@example.com",
    source: "website",
  }),
});
```

## 🗄️ Database

The application uses SQLite for simplicity with the following schema:

### Subscriptions Table

- `id` - Primary key
- `email` - Unique email address
- `subscribed_at` - Subscription timestamp
- `is_active` - Subscription status
- `source` - Subscription source (website, footer, newsletter, etc.)
- `ip_address` - User's IP address
- `user_agent` - User's browser information

## 🛡️ Security Features

- **Rate Limiting**: Prevents spam and abuse
  - Global: 1000 requests per 15 minutes
  - Subscriptions: 5 attempts per hour per IP
  - Email-specific: 3 attempts per day per email
- **Input Validation**: Server-side validation with Joi
- **CORS Protection**: Configured for development and production
- **Security Headers**: Helmet.js for security headers
- **SQL Injection Protection**: Parameterized queries

## 🎯 Features

- **Newsletter Subscription**: Email collection with validation
- **Duplicate Prevention**: Handles already subscribed emails
- **Unsubscribe**: Self-service unsubscription
- **Admin Dashboard**: View subscription statistics
- **Email Validation**: Client and server-side validation
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Comprehensive error messages
- **Toast Notifications**: Real-time user feedback

## 📊 Admin Features

- View subscription statistics
- Export subscriber lists
- Check subscription status
- Manage subscriptions

Access admin endpoints:

- `GET /api/subscriptions/stats` - Subscription statistics
- `GET /api/subscriptions` - All subscriptions with pagination

## 🚀 Production Deployment

### Backend Deployment

1. Set environment variables:

   ```
   NODE_ENV=production
   DATABASE_PATH=/app/data/subscriptions.db
   FRONTEND_URL=https://your-domain.com
   ```

2. Build and start:
   ```bash
   cd backend
   npm start
   ```

### Frontend Deployment

1. Set API URL:

   ```
   VITE_API_URL=https://your-api-domain.com
   ```

2. Build:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)

- `VITE_API_URL` - Backend API URL
- `VITE_DEV_MODE` - Development mode flag

#### Backend (backend/.env)

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3001)
- `FRONTEND_URL` - Frontend URL for CORS
- `DATABASE_PATH` - SQLite database file path

## 📝 Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run backend:dev` - Start backend development server
- `npm run backend:start` - Start backend production server
- `npm run dev:full` - Start both frontend and backend
- `npm run setup` - Install all dependencies
- `npm test` - Run tests
- `npm run typecheck` - TypeScript type checking

## 🤝 API Integration

The frontend uses a custom API client (`src/lib/api.ts`) and React hook (`src/hooks/useSubscription.ts`) for seamless backend integration:

```javascript
import { useSubscription } from "@/hooks/useSubscription";

const { subscribe, isLoading, isSuccess, error } = useSubscription();

// Subscribe to newsletter
await subscribe("user@example.com", "website");
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS errors**: Check `FRONTEND_URL` in backend `.env`
2. **Database errors**: Ensure `data/` directory is writable
3. **Port conflicts**: Change `PORT` in backend `.env`
4. **API not found**: Verify backend is running on correct port

### Health Check

```bash
curl http://localhost:3001/health
```

## 📄 License

This project is proprietary and confidential.
