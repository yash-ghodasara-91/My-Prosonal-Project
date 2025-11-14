const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Local Strategy for login
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const user = await User.findOne({ email });
  if (!user) {
    return done(null, false, { message: 'Invalid email or password' });
  }
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return done(null, false, { message: 'Invalid email or password' });
  }
  
  return done(null, user);
}));

// JWT Strategy for protected routes
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'coffee-shop-secret-key-2024-change-in-production'
}, async (payload, done) => {
  const user = await User.findById(payload.id);
  if (!user) {
    return done(null, false);
  }
  return done(null, user);
}));

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'coffee-shop-secret-key-2024-change-in-production',
    { expiresIn: '7d' }
  );
};

module.exports = passport;
module.exports.generateToken = generateToken;
