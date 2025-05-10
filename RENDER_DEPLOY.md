# Deploying to Render

This guide provides detailed instructions for deploying the Room Rental application to Render.

## Prerequisites

1. A [Render](https://render.com) account
2. Your project code pushed to a GitHub repository

## Deployment Steps

### Option 1: Manual Deployment (Web Service)

1. Log in to your Render dashboard
2. Click on "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the web service:
   - **Name**: room-rent-app (or your preferred name)
   - **Environment**: Node
   - **Region**: Choose the closest region to your users
   - **Branch**: main (or your default branch)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or select a paid plan for better performance)

5. Set up the required environment variables (Settings > Environment):
   - `NODE_ENV`: production
   - `JWT_SECRET`: [generate a secure random string]
   - `PORT`: 10000 (Render automatically sets this, but it's good to specify)

6. Click "Create Web Service"

### Option 2: Blueprint Deployment (render.yaml)

1. Ensure the `render.yaml` file is in your repository
2. Log in to your Render dashboard
3. Click on "New" and select "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file
6. Review the services to be created
7. **Important**: Add any required secret environment variables:
   - `JWT_SECRET`: [generate a secure random string]
8. Click "Apply"

## Post-Deployment

1. After deployment, your app will be accessible at `https://[your-app-name].onrender.com`
2. Verify that all features work correctly
3. Test user registration and login
4. Test apartment listing creation (admin role)
5. Test viewing apartment listings (all users)

## Important Notes

### Database Persistence

This application uses NeDB with an in-memory database for production. This means:

- All data will be reset when the service restarts
- Sample data is automatically loaded on startup
- This is suitable for demo purposes but not for a production application with real users

To add data persistence, consider:
- Switching to MongoDB for a production-ready database
- Using Render's PostgreSQL database service
- Implementing proper database backups

### Login Credentials

After deployment, you can log in with these demo credentials:

- **Admin User**:
  - Email: admin@example.com
  - Password: password123

- **Regular User**:
  - Email: user@example.com
  - Password: password123

### Free Tier Limitations

On Render's free tier:
- The service will spin down after 15 minutes of inactivity
- The first request after inactivity will take longer to respond
- There are monthly usage limits

For production use, consider upgrading to a paid plan. 