
const mongoose = require('mongoose'); //export
const Schema = mongoose.Schema; //store attributes in schema

const feedbackSchema = new Schema({ //create new object

     
  //properties
    feedback_id:{
        type: String,
        required:true,
        unique: true
    },

    email :{
        type: String, //data type
        required :true //validation
    },

    satisfaction_rate :{
        type: String, //data type
        required :true //validation
         
    },

    teacher_name :{
        type: String, //data type
        required :true//validation
    },

    message :{
        type: String, //data type
        required :true //validation
    },

    
})

const Feedback = mongoose.model("Feedback",feedbackSchema); //feedback schema data goes to feedback table

module.exports = Feedback;