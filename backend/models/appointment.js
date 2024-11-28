const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    mentor: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    email: { type: String, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
