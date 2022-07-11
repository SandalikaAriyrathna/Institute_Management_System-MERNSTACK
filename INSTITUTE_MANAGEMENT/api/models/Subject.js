const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    subject_code: {
      type: String,
      required: true,
      unique: true,
    },
    subject_name: {
      type: String,
      required: true,
    },
    teachers_name: {
      type: String,
      required: true,
    },
    relative_grade: {
      type: String,
      required: true,
    },
  
    monthly_fee: {
        type: String,
        required: true,
    },
    active_status: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
    },
    code:{
      type: Number,
      required:true,
    },
   
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);