
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const doctorRoutes = require('./routes/doctorRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// app.use('/api/doctors', doctorRoutes); // 👈 This is the route your frontend is calling

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js'); // 👉 importing db.js
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the modular function
connectDB();

// Routes
app.use('/api/doctors', doctorRoutes);

// Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
