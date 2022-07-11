const mongoose = require("mongoose");

const AcademicSchema = new mongoose.Schema({
    employment_type: {
      type:String,
      required: true,
    },
    astaffID: {
        type: String,
        required: true,
        unique: true
      },
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      core_subject: {
        type: String
      },
      email: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      basicSal: {
        type: String,
        required: true
      },
      subCode: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true,
      },
    position:{
      type:String,
    },
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Academic", AcademicSchema);