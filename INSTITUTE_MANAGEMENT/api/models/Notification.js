const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    notification_id: {
      type: String,
      required: true,
      unique: true,
    },
    
    student_id: {
      type: String,
      required: true,
      unique: true,
    },

    message: {
        type: String,
        required: true,
      },
    
    date: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);