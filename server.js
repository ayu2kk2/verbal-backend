const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();

// Middlewares
app.use(express.json());

app.use(cors({
  origin: 'https://verbal-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Routes
app.use('/api/contact', contactRoutes); 
app.use('/api/doctors', doctorRoutes);  

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
