const router = require("express").Router();
const bcrypt = require("bcrypt");
const Academic = require("../models/Academic");

//REGISTER
router.post("/register", async (req, res) => {

  const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newAcStaff = new Academic({
        employment_type : req.body.employment_type,
        astaffID : req.body.astaffID,
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        core_subject : req.body.core_subject,
        email : req.body.email,
        address : req.body.address,
        basicSal : req.body.basicSal,
        exam_year : req.body.exam_year,
        subCode : req.body.subCode,
        username : req.body.username,
        password : hashedPass,
        position : req.body.position, 
        profile_pic : req.body.profile_pic,    
    });

    try {
      const stffcount = await Academic.count()
      newAcStaff.astaffID = 'AS00' + (parseInt(stffcount)+1)
      console.log(newAcStaff.astaffID)
        try {
          const AcStaff = await newAcStaff.save();
          res.status(200).json(newAcStaff);
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
    const academic = await Academic.findOne({ username: req.body.username });
    !academic && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, academic.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = academic._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;