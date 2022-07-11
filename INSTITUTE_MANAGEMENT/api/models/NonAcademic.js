const mongoose = require("mongoose");

const NonAcademicSchema = new mongoose.Schema({
    nstaffID: {
        type: String,
        required: true,
        unique: true
      },
      name: {
        type: String,
        required: true
      },
      age: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      workHours: {
        type: String,
        required: true
      },
      position: {
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
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NonAcademic", NonAcademicSchema);