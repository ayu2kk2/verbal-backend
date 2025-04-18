const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: "Error fetching doctors" });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: "Error fetching doctor details" });
    }
};
