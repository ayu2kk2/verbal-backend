const express = require('express');
const { submitContactForm } = require('../controllers/contactController');
const Contact = require('../models/Contact.js');

const router = express.Router();

router.post('/contact', submitContactForm);
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Contact data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact data' });
  }
});

module.exports = router;
