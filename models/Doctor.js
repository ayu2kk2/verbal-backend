// const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     specialization: { type: String, required: true },
//     experience: { type: Number, required: true },
//     rating: { type: Number, required: true },
//     contact: { type: String, required: true },
//     location: { type: String, required: true },
// });

// const Doctor = mongoose.model('Doctor', doctorSchema);
// module.exports = Doctor;

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  clinic_address: {
    type: String,
    required: true
  },
  consultation_fee: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
