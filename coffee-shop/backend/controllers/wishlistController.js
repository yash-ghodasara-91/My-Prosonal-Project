const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

const getWishlist = async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
  
  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user.id, products: [] });
    await wishlist.save();
  }

  res.json(wishlist);
};

const addToWishlist = async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  let wishlist = await Wishlist.findOne({ user: req.user.id });

  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user.id, products: [] });
  }

  // Check if already in wishlist
  if (wishlist.products.includes(productId)) {
    return res.status(400).json({ message: 'Product already in wishlist' });
  }

  wishlist.products.push(productId);
  await wishlist.save();
  await wishlist.populate('products');

  res.json({ message: 'Product added to wishlist', wishlist });
};

const removeFromWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user.id });

  if (!wishlist) {
    return res.status(404).json({ message: 'Wishlist not found' });
  }

  wishlist.products = wishlist.products.filter(
    id => id.toString() !== req.params.id
  );

  await wishlist.save();
  await wishlist.populate('products');

  res.json({ message: 'Product removed from wishlist', wishlist });
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
