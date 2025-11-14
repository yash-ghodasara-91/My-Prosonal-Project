const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  res.json(blog);
};

const createBlog = async (req, res) => {
  const { title, content, excerpt, author } = req.body;
  const image = req.file ? `/uploads/blogs/${req.file.filename}` : '';

  const blog = new Blog({
    title,
    content,
    excerpt,
    author,
    image,
    date: new Date()
  });

  await blog.save();
  res.status(201).json({ message: 'Blog created successfully', blog });
};

const updateBlog = async (req, res) => {
  const { title, content, excerpt, author } = req.body;
  const updateData = { title, content, excerpt, author };

  if (req.file) {
    updateData.image = `/uploads/blogs/${req.file.filename}`;
  }

  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true, runValidators: true }
  );

  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.json({ message: 'Blog updated successfully', blog });
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  res.json({ message: 'Blog deleted successfully' });
};

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
