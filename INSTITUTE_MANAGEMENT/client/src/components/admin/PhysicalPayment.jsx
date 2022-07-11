import React from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Header from '../Header';
import axios from "axios";
import { useState, useRef } from 'react';
import swal from 'sweetalert';

export default function PhysicalPayment() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [payment_id, setPaymentID] = useState("");
    const [student_id, setStudentID] = useState("");
    const [name, setStudentName] = useState("");
    const [grade, setGrade] = useState("");
    const [month, setMonth] = useState("");
    const [teachers_name, setTeachersName] = useState("");
    const [monthly_fee, setMonthlyFee] = useState("");
    const [subjects, setSubject] = useState("");
  
    const [subopt, setSubjectOptions] = useState([]);
  
    async function handleSubmit(e) {
        e.preventDefault();
        const newPaymment = {
          payment_id,
          student_id,
          name,
          grade,
          subjects,
          teachers_name,
          month,
          monthly_fee
        };

          // Validation 

       if(name.length === 0 || grade.length === 0 || subjects.length === 0 || teachers_name.length === 0 || month.length === 0 || monthly_fee.length === 0){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
    
      }else{
       
        console.log(newPaymment)
        axios.post('http://localhost:5000/api/PhysicalFeeses',
          newPaymment
        )
          .then(function (response) {
            console.log(response);         
            setStudentID('')
            setStudentName('')
            setGrade('')
            setMonth('')
            setTeachersName('')
            setMonthlyFee('')
            setSubject('')
            
          })
          .catch(function (error) {
            console.log(error);
            swal(" invalid subject !", "Please Try Again !", "error");
          });

          swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
    .then((value) => {
      window.location = '/adminviewfees'+payment_id; 
   });
      }

    
  
      }
  
    const getData = async (e)=> {
      if(e.keyCode === 13){
    await axios.get(`http://localhost:5000/api/students/${student_id}`)
    .then(function (response) {
      if(response.data != null){
        setStudentName(response.data['name'])
        setGrade(response.data['grade'])
        setSubjectOptions(response.data['subjects'])
        
      }else{
        swal(" invalid subject !", "Please Try Again !", "error");
      } 
      })
    .catch(function (error) {
        console.log(error);
        swal(" Details can't search !", "Please Try Again !", "error");
     
      })
    }
    }
  
    const getData2 = async (e)=> {
      console.log(e)
    await axios.get(`http://localhost:5000/api/subjects/code/${e.target.value}`)
    .then(function (response) {
      if(response.data != null){
        setSubject(response.data['subject_name'])
        setTeachersName(response.data['teachers_name'])
        setMonthlyFee(response.data['monthly_fee'])
      }else{
        alert('invalid subject')
      }
      })
    .catch(function (error) {
        console.log(error);
        alert(" details not added " );      
      })
    }

   


  return (

    <div>
       



      <div class="row">
      <div class="col-sm-3"></div>     
      <div class="col-sm-9 ">
      <h1>Student Fees Payment Details</h1>
          
      <Form onSubmit={handleSubmit}>

<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student ID
  </Form.Label>
  <Col sm="7">
    <Form.Control type="text" placeholder="Enter Student ID " value={student_id}  onChange={(e) => setStudentID(e.target.value)} onKeyUp={getData } required/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student Name
  </Form.Label>
  <Col sm="7">
    <Form.Control value={name}    type="text" readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Grade
  </Form.Label>
  <Col sm="7">
    <Form.Control value={grade}   type="text"  readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Subject
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example"  style={{height:"35px", width:"70%"}} onChange={getData2} >
    <option selected>Select Subject</option>
    
    {subopt.map(subject=>{
      return <option value={subject}>{subject}</option>
    })}
  </select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Teacher name
  </Form.Label>
  <Col sm="7">
    <Form.Control value={teachers_name}   type="text"  readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
 Month
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)} style={{height:"35px", width:"70%"}} required>
    <option selected>Select Month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Monthly_Fee
  </Form.Label>
  <Col sm="7">
    <Form.Control value={monthly_fee}  type="number"  readonly />
  </Col>
</Form.Group>


</Col>
</Form>



        <div class="col-sm-4">
        </div>

        </div>

    <div class="btn-md-50 text-center">
        <Button class="btn btn-warning btn-sm-5 "  type="submit" onClick={handleSubmit} style={{height:"50px", width:"25%", marginTop:'15px'}}>
            Submit
        </Button>
        <Button variant="btn btn-secondary btn-sm-5 float-end" onClick={handleClose}  style={{height:"50px", width:"25%", marginTop:'15px'}}>
            Cancel
          </Button>
    </div>

      
        </div>
        </div> 
   
  )
}
