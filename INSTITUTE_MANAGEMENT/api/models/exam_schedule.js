const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    eScheduleID: {
        type: String,
        required: true,
        unique: true
    },
    grade: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("exam_schedule", ScheduleSchema);