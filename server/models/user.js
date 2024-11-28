import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        default: "client",
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})