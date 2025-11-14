const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const existing = await Category.findOne({ name });
  if (existing) {
    return res.status(400).json({ message: 'Category already exists' });
  }
  const category = new Category({ name });
  await category.save();
  res.status(201).json({ message: 'Category created successfully', category });
};

const updateCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true, runValidators: true }
  );
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json({ message: 'Category updated successfully', category });
};

const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json({ message: 'Category deleted successfully' });
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };