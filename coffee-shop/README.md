# Coffee Shop - E-commerce Project

Complete coffee shop e-commerce application with React frontend and Node.js backend.

## Project Structure

```
coffee-shop/
├── frontend/          # React + Vite frontend application
│   ├── src/           # Source code
│   ├── public/        # Public assets
│   └── package.json   # Frontend dependencies
│
├── backend/           # Node.js + Express backend
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── package.json   # Backend dependencies
│
└── SETUP.md          # Complete setup instructions
```

## Quick Start

See [SETUP.md](./SETUP.md) for detailed setup instructions.

### Quick Commands

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm run seed:admin  # Create admin user
npm run dev
```

## Features

### User Features
- Product browsing and search
- Shopping cart
- Wishlist
- User authentication (Login/Signup)
- Order management
- Blog reading

### Admin Features
- Admin dashboard with statistics
- Product management (CRUD)
- Blog management (CRUD)
- Order management
- Image uploads

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (JWT + Local Strategy)
- Multer (File uploads)

## Default Admin Credentials
- Email: `admin@coffeeshop.com`
- Password: `admin123`

## License
MIT
