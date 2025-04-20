

// const express = require('express');
// const router = express.Router();
// const Doctor = require('../models/Doctor.js');

// // GET all doctors
// router.get('/', async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// getting all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
