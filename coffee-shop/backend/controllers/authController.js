const User = require('../models/User');
const passport = require('../config/passport');
const { generateToken } = require('../config/passport');

const signup = async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const user = new User({
    email,
    password,
    firstName,
    lastName,
    phone,
    role: 'user'
  });

  await user.save();

  // Generate token
  const token = generateToken(user);

  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    }
  });
};

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: info.message || 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  })(req, res, next);
};

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json({ user });
};

module.exports = { signup, login, getMe };
