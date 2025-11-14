const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const connectDB = require('../config/database');

dotenv.config();

const seedAdmin = async () => {
  await connectDB();

  // Check if admin already exists
  const existingAdmin = await User.findOne({ email: 'admin@coffeeshop.com' });
  if (existingAdmin) {
    console.log('Admin user already exists!');
    process.exit(0);
  }

  // Create admin user
  const admin = new User({
    email: 'admin@coffeeshop.com',
    password: 'admin123', // Will be hashed by pre-save hook
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  });

  await admin.save();
  console.log('Admin user created successfully!');
  console.log('Email: admin@coffeeshop.com');
  console.log('Password: admin123');
  process.exit(0);
};

seedAdmin();
