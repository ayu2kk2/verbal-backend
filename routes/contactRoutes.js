

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save(); // ✅ Saving to DB

    await sendEmail({ name, email, phone, message }); //  Sending email

    res.status(200).json({ success: true, message: 'Contact submitted successfully' });
  } catch (err) {
    console.error('Error submitting contact:', err); //  You log it
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;