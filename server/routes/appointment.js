
import express from "express"

import Appointment from "../models/appintment.js";



const router = express.Router()

// Handle POST request to save appointment data
router.post("/book", async (req, res) => {
    try {
        const { mentor, date, time, email, notes } = req.body;

        // Validation (basic example)
        if (!mentor || !date || !time || !email) {
            return res.status(400).json({ error: "All fields are required except notes." });
        }

        // Create a new appointment
        const newAppointment = new Appointment({
            mentor,
            date,
            time,
            email,
            notes,
        });

        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully!" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server error" });
    }
});

export default router