const express = require('express');
const {
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const {
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const {
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const { getStats } = require('../controllers/adminController');
const { adminMiddleware } = require('../middleware/admin');
const { uploadProduct, uploadBlog } = require('../middleware/upload');

const router = express.Router();

// Stats
router.get('/stats', adminMiddleware, getStats);

// Products
router.post('/products', adminMiddleware, uploadProduct.single('image'), createProduct);
router.put('/products/:id', adminMiddleware, uploadProduct.single('image'), updateProduct);
router.delete('/products/:id', adminMiddleware, deleteProduct);

// Blogs
router.post('/blogs', adminMiddleware, uploadBlog.single('image'), createBlog);
router.put('/blogs/:id', adminMiddleware, uploadBlog.single('image'), updateBlog);
router.delete('/blogs/:id', adminMiddleware, deleteBlog);

// Orders
router.get('/orders', adminMiddleware, getAllOrders);
router.put('/orders/:id/status', adminMiddleware, updateOrderStatus);

module.exports = router;
