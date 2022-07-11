const router = require("express").Router();
const Notification = require("../models/Notification");

//CREATE Notification
router.post("/", async (req, res) => {
  const newNotification = new Notification(req.body);
  try {
    const feecount = await Notification.count()
    newNotification.notification_id = 'NID00' + (parseInt(feecount)+1)

      try {
        const savedNotification = await newNotification.save();
        res.status(200).json(savedNotification);
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (error) {
    console.log(error)
  }
});

//UPDATE Notification
router.put("/:notification_id", async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.notification_id);
    if (notification.student_id === req.body.student_id) {
      try {
        const updatedNotification = await Notification.findByIdAndUpdate(
          req.params.notification_id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedNotification);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your online fees!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Notification
router.delete("/:notification_id", async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.notification_id);
    if (notification.student_id === req.body.student_id) {
      try {
        await notification.delete();
        res.status(200).json("Notification has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your notification!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NOTIFICATION
router.get("/:notification_id", async (req, res) => {
    try {
      const notification = await Notification.findOne({'notification_id':req.params.notification_id});
      res.status(200).json(notification);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL NOTIFICATIONS 
  router.get("/", async (req, res) => {
    const notice_id = req.query.notification_id;
    try {
      let notifications;
      if (notice_id) {
        subjects = await Notification.find({ notification_id });
      } else {
        notifications = await Notification.find();
      }
      res.status(200).json(notifications);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;