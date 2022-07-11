const router = require("express").Router();
const PhysicalFees = require("../models/PhysicalFees");


//CREATE PhysicalFees
router.post("/", async (req, res) => {
  const newPhysicalFees = new PhysicalFees(req.body);

  let code = 1;
  try {
    const feecount = await PhysicalFees.find().sort({_id:-1}).limit(1)
    if(feecount.length > 0)
      code += feecount[0].code
      newPhysicalFees.payment_id = 'PPID00'+ code;
      newPhysicalFees.code = code;

      try {
        const savedPhysicalFees = await newPhysicalFees.save();
        res.status(200).json(savedPhysicalFees);
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (error) {
    console.log(error)
  }

});

//UPDATE PhysicalFees
router.put("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findById(req.params.payment_id);
    if (physicalfees.student_id === req.body.student_id) {
      try {
        const updatedPhysicalFees = await PhysicalFees.findByIdAndUpdate(
          req.params.payment_id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPhysicalFees);
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

//DELETE PhysicalFees
router.delete("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findById(req.params.payment_id);
      try {
        await physicalfees.delete();
        res.status(200).json("Fees has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PAYMENTS
router.get("/:payment_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.findOne({'payment_id':req.params.payment_id});
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});
 
//GET ALL PAYMENTS 
router.get("/", async (req, res) => {
  const pay_id = req.query.payment_id;
  try {
    let payments;
    if (pay_id) {
      subjects = await PhysicalFees.find({ payment_id });
    } else {
      payments = await PhysicalFees.find();
    }
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get All payments done by student
router.get("/pay/:student_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.find({'student_id':req.params.student_id});
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all subjects that paid in one month
router.get("/payMon/:month/:subjects/:student_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.find({'month':req.params.month,'subjects':req.params.subjects,'student_id':req.params.student_id});
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all by subject
router.get("/paySub/:subjects/:student_id", async (req, res) => {
  try {
    const physicalfees = await PhysicalFees.find({'subjects':req.params.subjects,'student_id':req.params.student_id});
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET COUNT
router.route("/countFees/:month/").get(function (req, res) {
  PhysicalFees.count({ month: req.params.month }, function (err, result) {
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
    const physicalfees = await PhysicalFees.find({ 'subjects': req.params.subjects, 'grade': req.params.grade });
    res.status(200).json(physicalfees);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;