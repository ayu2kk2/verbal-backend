// const express = require('express');
// const { submitContactForm } = require('../controllers/contactController');
// const Contact = require('../models/Contact.js');

// const router = express.Router();

// router.post('/contact', submitContactForm);
// router.post('/', async (req, res) => {
//   try {
//     const contact = new Contact(req.body);
//     await contact.save();
//     res.status(200).json({ message: 'Contact data saved successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to save contact data' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save to DB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send email
    await sendEmail({ name, email, phone, message });

    res.status(200).json({ success: true, message: 'Contact submitted successfully' });
  } catch (err) {
    console.error('Error submitting contact:', err);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;
