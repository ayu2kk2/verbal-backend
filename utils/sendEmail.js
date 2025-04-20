const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: '360degreemediaconnect@gmail.com',
    subject: 'New Inquiry from Website',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;