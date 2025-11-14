# Coffee Shop Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup Environment Variables
Create a `.env` file in the backend folder:
```
MONGODB_URI=mongodb://localhost:27017/coffee-shop
JWT_SECRET=coffee-shop-secret-key-2024-change-in-production
PORT=5000
NODE_ENV=development
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if installed as service, it should auto-start)
# Or start manually:
mongod
```

### 4. Create Admin User
```bash
npm run seed:admin
```
This will create a default admin user:
- Email: admin@coffeeshop.com
- Password: admin123

### 5. Start Backend Server
```bash
npm run dev
```
Server will run on http://localhost:5000

## API Endpoints

### Public Endpoints
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- GET /api/blogs - Get all blogs
- GET /api/blogs/:id - Get blog by ID

### Authentication
- POST /api/auth/signup - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user (protected)

### Protected User Endpoints
- GET /api/cart - Get user cart
- POST /api/cart/add - Add to cart
- PUT /api/cart/update/:id - Update cart item
- DELETE /api/cart/remove/:id - Remove from cart
- POST /api/orders - Create order
- GET /api/orders - Get user orders
- GET /api/wishlist - Get wishlist
- POST /api/wishlist/add - Add to wishlist
- DELETE /api/wishlist/remove/:id - Remove from wishlist

### Admin Endpoints (Require Admin Role)
- GET /api/admin/stats - Get dashboard statistics
- POST /api/admin/products - Create product
- PUT /api/admin/products/:id - Update product
- DELETE /api/admin/products/:id - Delete product
- POST /api/admin/blogs - Create blog
- PUT /api/admin/blogs/:id - Update blog
- DELETE /api/admin/blogs/:id - Delete blog
- GET /api/admin/orders - Get all orders
- PUT /api/admin/orders/:id/status - Update order status

## Authentication
All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## File Uploads
- Product images: `/uploads/products/`
- Blog images: `/uploads/blogs/`

