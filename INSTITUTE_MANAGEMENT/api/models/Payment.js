const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema(
    {
      paymentid: {
        type: String,
        required: true,
        unique: true
      },
      employee_ID: {
        type: String,
        required: true
       
      },
      employee_type: {
        type: String,
        required: true

      },
       name: {
        type: String,
        required: true
       
      },
       month: {
        type: String,
        required: true
       
      },
      salary: {
        type: String,
        required: true
       
      },
    },
    
  );
  
  module.exports = mongoose.model("Payment", PaymentSchema);