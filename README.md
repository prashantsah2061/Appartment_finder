# Apartment Finder

A modern, full-featured apartment rental platform built with Express.js, EJS templating, NeDB database, and JWT authentication. The UI is responsive and inspired by Airbnb's design principles.

![Apartment Finder](https://example.com/screenshot.png)

## Live Demo

[View the live application](https://your-vercel-url-here.vercel.app)

## Features

- **User Authentication**: Secure registration and login with JWT
- **Role-Based Access**: Different permissions for admins and regular users
- **Apartment Listings**: Browse, search, and filter available apartments
- **Admin Dashboard**: Manage apartment listings (create, edit, delete)
- **Responsive Design**: Modern UI that works on all devices
- **Secure Password Storage**: Bcrypt hashing for user passwords

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: EJS templates with vanilla JavaScript
- **Database**: NeDB (file-based database)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS with responsive design

## Running Locally

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/prashantsah2061/Appartment_finder.git
   cd Appartment_finder
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Access the application at `http://localhost:3000`

## Deployment

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Configure the following environment variables:
   - `JWT_SECRET` (your secret key for JWT authentication)
4. Deploy the application

### Deploying to Render

This application can be easily deployed to [Render](https://render.com). Follow these steps to deploy:

### Option 1: Deploy via Render Dashboard

1. Create a Render account at https://render.com if you don't have one already
2. Click on the "New +" button and select "Web Service"
3. Connect your GitHub repository
4. Configure your web service:
   - Name: room-rent-app (or your preferred name)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the appropriate instance type (Free tier works for initial deployment)
5. Add the following environment variables:
   - `NODE_ENV`: production
   - Any other secret keys or configurations you need
6. Click "Create Web Service"

### Option 2: Deploy using render.yaml (Blueprint)

1. Fork or clone this repository
2. Ensure the `render.yaml` file is in the root directory
3. Go to your Render dashboard
4. Click on "New" and select "Blueprint"
5. Connect your GitHub repository
6. Render will automatically detect the `render.yaml` file and set up the service
7. Confirm the deployment settings
8. Click "Apply"

### After Deployment

- Your application will be available at `https://room-rent-app.onrender.com` (or your custom subdomain)
- The first deployment might take a few minutes to complete
- The free tier on Render may have some limitations, such as spinning down after periods of inactivity

## Local Development

To run this application locally:

```
npm install
npm start
```

The application will be available at http://localhost:3000

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token
- `GET /api/auth/me` - Get current user information

### Apartments

- `GET /api/apartments` - Get all apartments
- `GET /api/apartments/:id` - Get a specific apartment
- `POST /api/apartments` - Create a new apartment (admin only)
- `PUT /api/apartments/:id` - Update an apartment (admin only)
- `DELETE /api/apartments/:id` - Delete an apartment (admin only)

## Project Structure

```
apartment-finder/
├── app.js                # Main application entry point
├── config/               # Configuration files
│   └── database.js       # Database connection
├── middleware/           # Express middleware
│   ├── auth.js           # Authentication middleware
│   └── adminAuth.js      # Admin authorization middleware
├── models/               # Data models
│   ├── Apartment.js      # Apartment model
│   └── User.js           # User model
├── public/               # Static assets
│   └── css/              # Stylesheets
├── routes/               # API and route handlers
│   ├── apartments.js     # Apartment routes
│   └── auth.js           # Authentication routes
├── views/                # EJS templates
│   ├── admin/            # Admin dashboard views
│   ├── apartment-details.ejs # Apartment detail page
│   ├── home.ejs          # Homepage
│   ├── layout.ejs        # Main layout template
│   ├── login.ejs         # Login page
│   └── register.ejs      # Registration page
└── package.json          # Project dependencies
```

## User Roles

- **Admin**: Can manage all apartment listings (create, edit, delete)
- **User**: Can browse listings and save favorites

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please open an issue in the GitHub repository.

---

Created by [Prashant Sah](https://github.com/prashantsah2061)
