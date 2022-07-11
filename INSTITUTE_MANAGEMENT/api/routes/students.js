const router = require("express").Router();
const Student = require("../models/Student");
const bcrypt = require("bcrypt");

//GET STUDENT
router.get("/:student_id", async (req, res) => {
  try {
    const student = await Student.findOne({'student_id':req.params.student_id});
    const { password, ...others } = student._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL STUDENTS
router.get("/", async (req, res) => {
  const stu_id = req.query.student_id;
  try {
    let students;
    if (stu_id) {
      students = await Student.find({ student_id });
    } else {
        students = await Student.find();
    }
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE STUDENT
router.put("/updatestd/:id", async(req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedStudent = await Student.findOneAndUpdate({'student_id':req.params.id},
      {
        $set: req.body
      },{new:true}
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
})

//DELETE STUDENT
router.delete("/deletestd/:id", async(req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({'student_id':req.params.id});
    res.status(200).json("Student has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
