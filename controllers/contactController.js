const nodemailer = require('nodemailer');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendEmail({ name, email, phone, message });
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Email sending failed.' });
  }
};
