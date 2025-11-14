const Order = require('../models/Order');
const Cart = require('../models/Cart');

const createOrder = async (req, res) => {
  const { shipping, paymentMethod } = req.body;
  const userId = req.user.id;

  // Get user's cart
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // Calculate total
  let total = 0;
  const items = cart.items.map(item => {
    const itemTotal = item.product.price * item.quantity;
    total += itemTotal;
    return {
      product: item.product._id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    };
  });

  // Add tax (10%)
  total = total * 1.1;

  // Create order
  const order = new Order({
    user: userId,
    items,
    total,
    shipping,
    paymentMethod: paymentMethod || 'card',
    status: 'confirmed'
  });

  await order.save();

  // Clear cart
  await Cart.findOneAndUpdate(
    { user: userId },
    { items: [] }
  );

  res.status(201).json({ message: 'Order created successfully', order });
};

const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate('items.product')
    .sort({ createdAt: -1 });
  res.json(orders);
};

const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('items.product');
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  // Check if user owns the order or is admin
  if (order.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  res.json(order);
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find()
    .populate('user', 'firstName lastName email')
    .populate('items.product')
    .sort({ createdAt: -1 });
  res.json(orders);
};

const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json({ message: 'Order status updated', order });
};

module.exports = { createOrder, getUserOrders, getOrderById, getAllOrders, updateOrderStatus };
