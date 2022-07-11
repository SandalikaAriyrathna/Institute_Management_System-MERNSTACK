const router = require("express").Router();
const Subject = require("../models/Subject");

//CREATE SUBJECT
router.post("/", async (req, res) => {
  const newSubject = new Subject(req.body);
  let code = 1;
  try {
    const subcount = await Subject.find().sort({_id:-1}).limit(1)   
    if(subcount.length > 0)
      code += subcount[0].code
      newSubject.subject_code = 'SUB00'+ code;
      newSubject.code = code;
  try {
    const savedSubject = await newSubject.save();
    res.status(200).json(savedSubject);
  } catch (err) {
    res.status(500).json(err);
  }
} catch (error) {
  console.log(error)
}

});



//GET SUBJECT
router.get("/:subject_code", async (req, res) => {
  try {
    const subject = await Subject.findOne({'subject_code':req.params.subject_code});
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});



//GET ALL SUBJECTS
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SUBJECT by subjectname
router.get("/code/:subject_name", async (req, res) => {
  try {
    const subject = await Subject.findOne({'subject_name':req.params.subject_name});
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;