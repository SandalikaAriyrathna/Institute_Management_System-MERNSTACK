const router = require("express").Router();
const Student = require("../models/Student");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newStudent = new Student({
      student_id : req.body.student_id,
      name : req.body.name,
      age : req.body.age,
      gender : req.body.gender,
      address : req.body.address,
      school : req.body.school,
      exam_year : req.body.exam_year,
      email_address : req.body.email_address,
      grade : req.body.grade,
      phone_number : req.body.phone_number,
      subjects : req.body.subjects,
      username : req.body.username,
      password : hashedPass,
      profile_pic : req.body.profile_pic,
  });
  try {
    const stdcount = await Student.count()
    newStudent.student_id = 'STD00' + (parseInt(stdcount)+1)
      try {
        const student = await newStudent.save();
        res.status(200).json(student);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
      console.log(error)
    }

});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({ username: req.body.username });
    !student && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, student.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = student._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ADD TO HISTORY
router.post("/addhis", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newStudent = new Student({
        student_id : req.body.student_id,
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        address : req.body.address,
        school : req.body.school,
        exam_year : req.body.exam_year,
        email_address : req.body.email_address,
        grade : req.body.grade,
        phone_number : req.body.phone_number,
        username : req.body.username,
        subjects : req.body.subjects,
        password : hashedPass,
        profile_pic : req.body.profile_pic,
    });

    const student = await newStudent.save();
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;