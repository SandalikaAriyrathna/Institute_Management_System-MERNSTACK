const router= require("express").Router();
const { disconnect } = require("mongoose");
let Feedback = require("../models/Feedback");

//add feedback
router.route("/addf").post((req,res)=> {

    const feedback_id = req.body.feedback_id;
    const email=req.body.email;
    const satisfaction_rate=req.body.satisfaction_rate;
    const teacher_name=req.body.teacher_name;
    const message=req.body.message ;

    const newFeedback= new Feedback({ //new feedback object
    
        feedback_id,
        email,
        satisfaction_rate,
        teacher_name,
        message 
    })

    newFeedback.save().then(()=>{
        //to be executed if successful
        res.json("Feedback Added")
    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

})

 //view all the data from table by passenger
router.route("/readf").get((req,res)=>{              
      Feedback.find().then((Feedback)=>{
            res.json(Feedback)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

 //view all the data from table by admin
router.route("/readfadmin").get((req,res)=>{              
    Feedback.find().then((Feedback)=>{
          res.json(Feedback)
    }) .catch((err)=>{
         console.log(err)
    })
 
})

  
 //view a specific feedback by id
 router.route("/getf/:id").get(async(req,res)=> {
    

    let userId= req.params.id;
    const user= await Feedback.findById(userId)
    .then((feedback) =>{
        res.status(200).send({ status : "user fetched",feedback})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user"});
    })
 })
  

//update a feedback
router.route("/updatef/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { feedback_id,email,satisfaction_rate,teacher_name,message } =req.body; //destructure frontend variables passing to backend through a object

       const updateFeedback= {       
        feedback_id,
        email,
        satisfaction_rate,
        teacher_name,
        message,
         
       }

       const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(() =>{
        res.status(200).send({status: "User updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

//delete feedback
router.route("/deletef/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await Feedback.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})

module.exports = router;