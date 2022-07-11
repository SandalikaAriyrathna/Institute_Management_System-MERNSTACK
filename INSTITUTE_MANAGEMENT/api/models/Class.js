const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    tScheduleID: {
        type: String,
        required:true,
        unique: true
    },
    grade : {
        type: String,
        required:true
    },
    subject : {
        type:String,
        required:true
    },
    teacher : {
        type: String,
        required:true
    },
    day : {
        type:String,
        required:true
    },
    time : {
        type:String,
        required:true
    },
    hallNo : {
        type:String,
        required:true
    },
    wLink : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Class", ClassSchema);