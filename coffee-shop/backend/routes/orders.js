const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrderById
} = require('../controllers/orderController');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);
router.get('/:id', authMiddleware, getOrderById);

module.exports = router;
