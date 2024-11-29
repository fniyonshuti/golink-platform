import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    mentor: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    email: { type: String, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
});



const Appointment = mongoose.model('Appointment', AppointmentSchema)


export default Appointment