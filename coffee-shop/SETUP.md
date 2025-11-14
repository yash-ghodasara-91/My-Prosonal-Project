# Coffee Shop - Complete Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (installed and running)
- npm or yarn

## Step 1: Install Frontend Dependencies
```bash
cd frontend
npm install
```

## Step 2: Setup Backend

### 2.1 Install Backend Dependencies
```bash
cd backend
npm install
```

### 2.2 Create .env File
Create a `.env` file in the `backend` folder:
```
MONGODB_URI=mongodb://localhost:27017/coffee-shop
JWT_SECRET=coffee-shop-secret-key-2024-change-in-production
PORT=5000
NODE_ENV=development
```

### 2.3 Start MongoDB
Make sure MongoDB is running:
```bash
# Windows (usually auto-starts)
# Or manually:
mongod
```

### 2.4 Create Admin User
```bash
cd backend
npm run seed:admin
```
This creates:
- Email: `admin@coffeeshop.com`
- Password: `admin123`

## Step 3: Run the Application

### Terminal 1: Start Backend
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

### Terminal 2: Start Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

## Step 4: Access the Application

### User Access
- Frontend: http://localhost:5173
- Sign up or login as a regular user

### Admin Access
- Admin Login: http://localhost:5173/admin/login
- Email: `admin@coffeeshop.com`
- Password: `admin123`

## Admin Panel Features
- **Dashboard**: View statistics and recent orders
- **Products**: Add, edit, delete products with image upload
- **Blogs**: Add, edit, delete blog posts with image upload
- **Orders**: View all orders and update order status

## API Endpoints
All API endpoints are available at: http://localhost:5000/api

See `backend/README.md` for complete API documentation.

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check if MongoDB URI in `.env` is correct
- Default: `mongodb://localhost:27017/coffee-shop`

### Port Already in Use
- Change PORT in backend `.env` file
- Or stop the process using the port

### Admin Login Not Working
- Make sure you ran `npm run seed:admin`
- Check if user exists in MongoDB
- Verify email and password are correct

## Notes
- Backend must be running for authentication and data operations
- Images are stored in `backend/uploads/` folder
- JWT tokens are stored in localStorage
- All passwords are hashed using bcrypt

