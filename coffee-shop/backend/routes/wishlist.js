const express = require('express');
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist
} = require('../controllers/wishlistController');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getWishlist);
router.post('/add', authMiddleware, addToWishlist);
router.delete('/remove/:id', authMiddleware, removeFromWishlist);

module.exports = router;
