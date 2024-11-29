import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is mandatory
    },
    description: {
        type: String,
        required: true, // Description is mandatory
    },
    deadline: {
        type: Date, // Deadline should be stored as a Date object
        required: true, // Make it mandatory
        validate: {
            validator: function (value) {
                // Ensure the deadline is in the future
                return value > Date.now();
            },
            message: "Deadline must be a future date.",
        },
    },
    location: {
        type: String,
    },
    websiteUrl: {
        type: String,
    }
}, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
