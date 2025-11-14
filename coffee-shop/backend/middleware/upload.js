const multer = require('multer');
const path = require('path');

// Multer configuration for product images
const productStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/products/'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Multer configuration for blog images
const blogStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/blogs/'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const uploadProduct = multer({ storage: productStorage });
const uploadBlog = multer({ storage: blogStorage });

module.exports = { uploadProduct, uploadBlog };

