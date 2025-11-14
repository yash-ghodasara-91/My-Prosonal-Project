const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const { search, category } = req.query;
  let query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } }
    ];
  }

  if (category && category !== 'All') {
    query.category = category;
  }

  const products = await Product.find(query);
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

const createProduct = async (req, res) => {
  const { name, description, price, category, rating, reviews, inStock } = req.body;
  const image = req.file ? `/uploads/products/${req.file.filename}` : '';

  const product = new Product({
    name,
    description,
    price,
    image,
    category,
    rating: rating || 0,
    reviews: reviews || 0,
    inStock: inStock !== undefined ? inStock : true
  });

  await product.save();
  res.status(201).json({ message: 'Product created successfully', product });
};

const updateProduct = async (req, res) => {
  const { name, description, price, category, rating, reviews, inStock } = req.body;
  const updateData = { name, description, price, category, rating, reviews, inStock };

  if (req.file) {
    updateData.image = `/uploads/products/${req.file.filename}`;
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true, runValidators: true }
  );

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ message: 'Product updated successfully', product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted successfully' });
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
