import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    type: {
        type: String,
        required: true,
        enum: ["Full-time", "Part-time"]
    },
    description: {
        type: String
    },

}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema)