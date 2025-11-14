const ContactMessage = require('../models/ContactMessage');

const createMessage = async (req, res, next) => {
  try {
    const { name, email, message, userId } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const doc = await ContactMessage.create({
      name,
      email,
      message,
      user: req.user?.id || userId || undefined,
    });

    res.status(201).json(doc);
  } catch (err) {
    next(err);
  }
};

const getMessages = async (req, res, next) => {
  try {
    const docs = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .limit(200);
    res.json(docs);
  } catch (err) {
    next(err);
  }
};

module.exports = { createMessage, getMessages };