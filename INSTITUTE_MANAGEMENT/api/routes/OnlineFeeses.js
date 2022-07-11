const router = require("express").Router();
const OnlineFees = require("../models/OnlineFees");

//CREATE OnlineFees
router.post("/", async (req, res) => {
  const { month, student_id, subjects } = req.body
  const onlinefees = await OnlineFees.find({ 'month': month, 'subjects': subjects, 'student_id': student_id });
  // console.log(onlinefees)
  if (onlinefees.length <= 0) {
    const newOnlineFees = new OnlineFees(req.body);
    let code = 1;
    try {
      const feecount = await OnlineFees.find().sort({ _id: -1 }).limit(1)
      if (feecount.length > 0)
        code += feecount[0].code
      newOnlineFees.payment_id = 'OPID00' + code;
      newOnlineFees.code = code;
      try {
        const savedOnlineFees = await newOnlineFees.save();
        res.status(200).json(savedOnlineFees);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    res.status(201).json('er');
  }
});

//UPDATE OnlineFees
router.put("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findById(req.params.payment_id);
    if (onlinefees.student_id === req.body.student_id) {
      try {
        const updatedOnlineFees = await OnlineFees.findByIdAndUpdate(
          req.params.payment_id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOnlineFees);
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

//DELETE OnlineFees
router.delete("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findById(req.params.payment_id);
    try {
      await onlinefees.delete();
      res.status(200).json("Fees has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET OnlineFees
router.get("/:payment_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.findOne({ 'payment_id': req.params.payment_id });
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get All payments done by student
router.get("/pay/:student_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.find({ 'student_id': req.params.student_id });
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});


//get all subjects that paid in one month
router.get("/payMon/:month/:subjects/:student_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.find({ 'month': req.params.month, 'subjects': req.params.subjects, 'student_id': req.params.student_id });
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all by subject
router.get("/paySub/:subjects/:student_id", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.find({ 'subjects': req.params.subjects, 'student_id': req.params.student_id });
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});



// //GET OnlineFees
// router.get("/:payment_id", async (req, res) => {
//   try {
//     const onlinefees = await OnlineFees.findOne({'payment_id':req.params.payment_id});
//     res.status(200).json(onlinefees);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // //GET ALL OnlineFeeses
// router.get("/", async (req, res) => {
//   try {
//     const onlinefees = await OnlineFees.find();
//     res.status(200).json(onlinefees);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET ALL OnlineFeeses 

router.get("/", async (req, res) => {
  const pay_id = req.query.payment_id;
  try {
    let payments;
    if (pay_id) {
      subjects = await OnlineFees.find({ payment_id });
    } else {
      payments = await OnlineFees.find();
    }
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET COUNT
router.route("/countFees/:month/").get(function (req, res) {
  OnlineFees.count({ month: req.params.month }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

//get all list
router.get("/:subjects/:grade", async (req, res) => {
  try {
    const onlinefees = await OnlineFees.find({ 'subjects': req.params.subjects, 'grade': req.params.grade });
    res.status(200).json(onlinefees);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;