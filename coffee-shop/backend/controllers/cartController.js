const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  
  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
    await cart.save();
  }

  res.json(cart);
};

const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
  }

  // Check if product already in cart
  const existingItem = cart.items.find(
    item => item.product.toString() === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  await cart.populate('items.product');

  res.json({ message: 'Item added to cart', cart });
};

const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const item = cart.items.id(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  if (quantity <= 0) {
    item.remove();
  } else {
    item.quantity = quantity;
  }

  await cart.save();
  await cart.populate('items.product');

  res.json({ message: 'Cart updated', cart });
};

const removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  cart.items.id(req.params.id).remove();
  await cart.save();
  await cart.populate('items.product');

  res.json({ message: 'Item removed from cart', cart });
};

const clearCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });
  if (cart) {
    cart.items = [];
    await cart.save();
  }
  res.json({ message: 'Cart cleared' });
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart, clearCart };
