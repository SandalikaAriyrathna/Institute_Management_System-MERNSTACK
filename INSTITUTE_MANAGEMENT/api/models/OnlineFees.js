const mongoose = require("mongoose");
  
const OnlinePaySchema = new mongoose.Schema(
  { 
    payment_id: {
      type: String,
      required: true,
      unique: true,
    },
    student_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    subjects: {
      type: String,
      required: true,
    },
    teachers_name: {
      type: String,
      required: true,
    },
    month: {
        type: String,
        required: true,
    },
    monthly_fee: {
        type: String,
        required: true,
    },
    payment_slip: {
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

module.exports = mongoose.model("OnlineFees", OnlinePaySchema);