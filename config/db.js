// import mongoose from 'mongoose';
// let isConnected = false; 
// const connectDB = async () => {
//   if (isConnected) {
//     return;
//   }

//   if (!process.env.MONGO_URI) {
//     throw new Error('Please define the MONGO_URI environment variable');
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = db.connections[0].readyState;
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     throw error;
//   }
// };

// export default connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('✅ MongoDB already connected');
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
