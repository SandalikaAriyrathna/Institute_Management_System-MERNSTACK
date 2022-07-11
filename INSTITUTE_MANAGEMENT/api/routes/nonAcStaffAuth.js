const router = require("express").Router();
const bcrypt = require("bcrypt");
const NonAcademic = require("../models/NonAcademic");

//REGISTER
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newNonAcStaff = new NonAcademic({
      nstaffID : req.body.nstaffID,
      name : req.body.name,
      age : req.body.age,
      gender : req.body.gender,
      email : req.body.email,
      address : req.body.address,
      workHours : req.body.workHours,
      position : req.body.position,
      username : req.body.username,
      password : hashedPass,     
  });

  try {
    const nstffcount = await NonAcademic.count()
    newNonAcStaff.nstaffID = 'NAS00' + (parseInt(nstffcount)+1)

      try {
      
        const NonAcStaff = await newNonAcStaff.save();
        res.status(200).json(NonAcStaff);
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
      const nonacademic = await NonAcademic.findOne({ username: req.body.username });
      !nonacademic && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, nonacademic.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = nonacademic._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;