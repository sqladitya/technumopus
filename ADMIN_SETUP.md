# Admin Panel Setup Instructions

## Prerequisites

1. **PostgreSQL Database**: Ensure you have access to the PostgreSQL database with the provided credentials:
   - Host: 44.205.19.83:5432
   - Database: technumopus.com
   - User: technumopus
   - Password: onified1opustechnum

## Setup Steps

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

The `.env` file has been created with the correct database credentials. No changes needed.

### 3. Initialize Database and Seed Data

```bash
# From the backend directory
npm run db:seed
```

This will:

- Create all necessary database tables
- Create a default admin user (username: `admin`, password: `admin123`)
- Add sample jobs, team members, and contact submissions

### 4. Start the Backend Server

```bash
# From the backend directory
npm run dev
```

The backend will be available at `http://localhost:3001`

### 5. Start the Frontend

```bash
# From the root directory
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Admin Panel Access

1. Navigate to `http://localhost:5173/admin`
2. Login with:
   - **Username**: `admin`
   - **Password**: `admin123`

## Features

### Dashboard

- Overview statistics
- Recent activity
- Top performing pages
- Real-time metrics

### Jobs Management

- Create, edit, and delete job postings
- Manage job status (active/paused/closed)
- View application counts
- Full CRUD operations

### Team Management

- Add, edit, and remove team members
- Manage member status
- Update profiles, skills, and social links
- Upload photos and bio information

### Contact Submissions

- View all contact form submissions
- Filter by type (contact/consultation) and status
- Update submission status (new/read/responded/archived)
- Delete submissions
- Export to CSV

### Real-time Updates

- All changes in the admin panel immediately update the database
- Changes are reflected across the website
- Proper error handling and loading states

## API Endpoints

The backend provides comprehensive REST APIs:

- `POST /api/auth/login` - Admin authentication
- `GET /api/admin/dashboard/overview` - Dashboard data
- `GET /api/admin/jobs` - Jobs management
- `GET /api/admin/team` - Team management
- `GET /api/admin/submissions` - Contact submissions
- `POST /api/contact/contact` - Public contact form
- `POST /api/contact/consultation` - Public consultation form

## Security Features

- JWT-based authentication
- Rate limiting
- CORS protection
- Input validation
- SQL injection protection
- Password hashing with bcryptjs

## Database Schema

The system creates the following tables:

- `admin_users` - Admin authentication
- `jobs` - Job postings
- `team_members` - Team profiles
- `contact_submissions` - Form submissions
- `content_pages` - Dynamic content (future use)
- `analytics` - Page view tracking

## Troubleshooting

### Database Connection Issues

1. Verify the database credentials in `.env`
2. Check if the PostgreSQL server is accessible
3. Ensure the database exists and the user has proper permissions

### Authentication Issues

1. Clear browser localStorage
2. Check JWT_SECRET in `.env`
3. Restart the backend server

### API Errors

1. Check backend logs for detailed error messages
2. Verify the backend is running on port 3001
3. Check CORS configuration for frontend URL

## Production Deployment

For production deployment:

1. **Environment Variables**: Update `.env` with production values
2. **JWT Secret**: Use a strong, random JWT secret
3. **Database**: Ensure production database is properly configured
4. **HTTPS**: Use HTTPS for both frontend and backend
5. **Rate Limiting**: Adjust rate limits for production traffic
6. **Logging**: Configure proper logging and monitoring

## Support

If you encounter any issues:

1. Check the browser console for frontend errors
2. Check backend logs for API errors
3. Verify database connectivity
4. Ensure all dependencies are installed

The admin panel is now fully functional and will update your website and database in real-time!
