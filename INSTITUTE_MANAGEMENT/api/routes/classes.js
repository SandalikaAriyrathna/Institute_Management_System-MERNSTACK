const router = require("express").Router();
const Class = require("../models/Class");

//CREATE CLASS
router.post("/", async (req, res) => {
  const newClass = new Class({
    tScheduleID:req.body.tScheduleID,
    grade:req.body.grade,
    subject:req.body.subject,
    teacher:req.body.teacher,
    day:req.body.day,
    time:req.body.time,
    hallNo:req.body.hallNo,
    wLink:req.body.wLink
  });
  try{
    const clscount = await Class.count()
    newClass.tScheduleID='TS00' + (parseInt(clscount)+1)
    try {
      const savedClass = await newClass.save();
      res.status(200).json(savedClass);
    } catch (err) {
      res.status(500).json(err);
    }
  }catch(error){
    console.log(error)
  }
  
});

//GET CLASS
router.get("/:tScheduleID", async (req, res) => {
  try {
    const viewClass = await Class.findOne({'tScheduleID':req.params.tScheduleID});
    res.status(200).json(viewClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CLASSES
router.get("/", async (req, res) => {
    
  try {
    const viewClasses = await Class.find();
    res.status(200).json(viewClasses);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CLASS
router.put("/updatecls/:id", async(req, res) => {

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {new:true}
    );
    res.status(200).json(updatedClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CLASS
router.delete("/deletecls/:id", async(req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    res.status(200).json("Schedule has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;

  