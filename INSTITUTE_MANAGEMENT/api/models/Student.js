const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    exam_year: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
    },
    grade:{
      type: String,
      required: true,
    },
    phone_number:{
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
    },
    subjects: {
      type: Array,
      required : true,
      value : [String],
    },
    password: {
        type: String,
        required: true,
    },
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);