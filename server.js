
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db.js'); // 👉 importing db.js
// const doctorRoutes = require('./routes/doctorRoutes');

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB using the modular function
// connectDB();

// // Routes
// app.use('/api/doctors', doctorRoutes);

// // Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const doctorRoutes = require('./routes/doctorRoutes.js');
const connectDB = require('./config/db.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// API Routes
app.use('/api/doctors', doctorRoutes);


const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


module.exports = app;

