const passport = require('../config/passport');

const authenticate = passport.authenticate('jwt', { session: false });

const authMiddleware = (req, res, next) => {
  authenticate(req, res, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  });
};

module.exports = { authenticate, authMiddleware };
