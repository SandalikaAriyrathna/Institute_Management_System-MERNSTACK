const router = require("express").Router();
const Academic = require("../models/Academic");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/updatestff/:id", async(req, res) => {
  
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedStaff = await Academic.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedStaff);
  } catch (err) {
    res.status(500).json(err);
  } 
});

//DELETE
router.delete("/deletestff/:id", async(req, res) => {
 
  try {
    const deletedStaff = await Academic.findByIdAndDelete(req.params.id);
    res.status(200).json("Staff has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }

})

//GET ACADEMIC STAFF
router.get("/:astaffID", async (req, res) => {
  try {
    const viewAstaff = await Academic.findOne({'astaffID':req.params.astaffID})
    const { password, ...others } = viewAstaff._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ACADEMIC STAFF
router.get("/", async (req, res) => {
  const sta_id = req.query.astaffID;
  try {
    let academics;
    if (sta_id) {
      academics = await Academic.find({ astaffID });
    } else {
      academics = await Academic.find();
    }
    res.status(200).json(academics);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;