const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Blog = require('../models/Blog');

const getStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalOrders = await Order.countDocuments();
  const totalBlogs = await Blog.countDocuments();

  const totalRevenue = await Order.aggregate([
    { $match: { status: { $ne: 'cancelled' } } },
    { $group: { _id: null, total: { $sum: '$total' } } }
  ]);

  const recentOrders = await Order.find()
    .populate('user', 'firstName lastName email')
    .sort({ createdAt: -1 })
    .limit(5);

  res.json({
    stats: {
      totalUsers,
      totalProducts,
      totalOrders,
      totalBlogs,
      totalRevenue: totalRevenue[0]?.total || 0
    },
    recentOrders
  });
};

module.exports = { getStats };
