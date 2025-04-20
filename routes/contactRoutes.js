

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Saving to database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error submitting contact:', err);
    res.status(500).json({ success: false, message: 'Failed to send or save message. Try again later.' });
  }
});

module.exports = router;