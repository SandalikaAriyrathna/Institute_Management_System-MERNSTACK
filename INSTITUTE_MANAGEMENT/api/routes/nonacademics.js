const router = require("express").Router();
const NonAcademic = require("../models/NonAcademic");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/updatenonstff/:id", async(req, res) => {
  
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedNonStaff = await NonAcademic.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedNonStaff);
  } catch (err) {
    res.status(500).json(err);
  } 
});

//DELETE
router.delete("/deletenonstff/:id", async(req, res) => {
 
  try {
    const deletedNonStaff = await NonAcademic.findByIdAndDelete(req.params.id);
    res.status(200).json("Staff has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }

})

//GET NON ACADEMIC STAFF
router.get("/:nstaffID", async (req, res) => {
  try {
    const viewNstaff = await NonAcademic.findOne({'nstaffID':req.params.nstaffID})
    res.status(200).json(viewNstaff);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL NON ACADEMIC STAFF
router.get("/", async (req, res) => {
const nsta_id = req.query.nstaffID;
try {
  let nonacademics;
  if (nsta_id) {
    nonacademics = await NonAcademic.find({ nstaffID });
  } else {
    nonacademics = await NonAcademic.find();
  }
  res.status(200).json(nonacademics);
} catch (err) {
  res.status(500).json(err);
}
});


module.exports = router;