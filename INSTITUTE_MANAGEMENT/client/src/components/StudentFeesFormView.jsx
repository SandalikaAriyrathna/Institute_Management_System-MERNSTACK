import React, { useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import swal from 'sweetalert';

export default function StudentFeesFormView() {

  const [payment_id, setPaymentID] = useState("");
  const [student_id, setStudentID] = useState("");
  const [name, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");
  const [teachers_name, setTeachersName] = useState("");
  const [monthly_fee, setMonthlyFee] = useState("");
  const [subjects, setSubject] = useState("");

  const [subopt, setSubjectOptions] = useState([]);

  const getData = async (e)=> {
    if(e.keyCode === 13){
  await axios.get(`http://localhost:5000/api/students/${student_id}`)
  .then(function (response) {
    console.log(response.data)
    if(response.data != null){    
      setStudentName(response.data['name'])
      setGrade(response.data['grade'])
      setSubjectOptions(response.data['subjects'])
      console.log(subopt)
      console.log(response.data['subjects'])
    }else{
     
      swal(" invalid student id !","Please Try Again !", "error");  
    
    }
    })
  .catch(function (error) {
      console.log(error);
      swal(" Details can't search !","Please Try Again !", "error");  
           
    })
  }
  }
  

  // const getData2 = async (e)=> {
  //   console.log(e)
  // await axios.get(`http://localhost:5000/api/OnlineFeeses/payMon/${e.target.value}/${subopt}/${student_id}`)
  // .then(function (response) {
    
  //   if(response.data != null){
  //     setTeachersName(response.data[0]['teachers_name'])
  //     setMonthlyFee(response.data[0]['monthly_fee'])
  //     setPaymentID(response.data[0]['payment_id'])
     
  //   }else{
  //     alert('invalid month')
  //   }
  //   })
  // .catch(function (error) {
  //     console.log(error);
  //     alert("This student didn't pay for this month" );      
  //   })
  // }

  
  const getData2 = async (e)=> {
      let response = await axios.get(`http://localhost:5000/api/OnlineFeeses/payMon/${e.target.value}/${subjects}/${student_id}`)
      // console.log(response.data)
    if(response.data.length>0){
      setTeachersName(response.data[0]['teachers_name'])
      setMonthlyFee(response.data[0]['monthly_fee'])
      setPaymentID(response.data[0]['payment_id'])
     
    }else{
      getData3(e.target.value)
      }
      

  }

const getData3 = async(e)=>{
 await axios.get(`http://localhost:5000/api/PhysicalFeeses/payMon/${e}/${subjects}/${student_id}`)
  .then(function (response) { 
  //  console.log(response.data)
 if(response.data.length>0){
   setTeachersName(response.data[0]['teachers_name'])
   setMonthlyFee(response.data[0]['monthly_fee'])
   setPaymentID(response.data[0]['payment_id'])
  //  console.log(response.data)
 }else{
 
  swal(" This student didn't pay for this month !","Select Another Month !", "error");  
       
 }
  
 })
}
   
const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: ()=> componentRef.current,
});



    return (
        <> 
 <button type="button" onClick={handlePrint} class="btn btn-primary btn-sm-5 float-end" style={{height:"55px", width:"15%", float: 'right' }}>
            Print Slips
        </button>
        <div ref = {componentRef}>          
          <div className="container shadow" style={{ width:'750px', background:'#FEF3B3' , padding:'10px 10px 10px 10px'}}> 
        
          <h1 style={{textAlign:'center'}} >Student Payment Details</h1>

<div class="row">
<div class="col-sm-8 "  style={{margin:"auto"}}>


<Form>

<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
<Form.Label column sm="3">
Student ID
</Form.Label>
<Col sm="9">
  <Form.Control value={student_id} type="text" placeholder="Enter Student ID "  onChange={(e) => setStudentID(e.target.value)} onKeyUp={getData} required/>
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
<Form.Label column sm="3">
Student Name

</Form.Label>
<Col sm="9">
  <Form.Control value={name} type="text"  readOnly />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
<Form.Label column sm="3">
Grade

</Form.Label>
<Col sm="9">
  <Form.Control  value={grade}  type="text"  readOnly />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Subject
  </Form.Label>
  <Col sm={7}>
  <select  className="Col-3" aria-label="Default select example" onChange={(e) => setSubject(e.target.value)}   style={{height:"35px", width:"70%"}} required>
    <option selected>Select Subject</option>
    
    {subopt.map(subject=>{
      return <option value={subject}>{subject}</option>
    })}
  </select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
 Month
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example"  style={{height:"35px", width:"70%"}} onChange={getData2} required>
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


  </Col>
</Form>
  </div>
  </div>


  <div>

            <div class="row">
            <div class="col-sm-8 d-flex justify-content-around"  style={{margin:"auto"}}>
              <div class="card m-5" style={{ padding:'20px 10px 10px 10px'}}>
                
                    
                        <div class="card">
                            <div class="card-body">

                 

                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Teacher's name
                   
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control value={teachers_name}    type="text"  readOnly />
                      </Col>
                      </Form.Group>

                      
                      <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Monthly Fee
                      
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control value={monthly_fee}   type="text"  readOnly />
                      </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Payment ID
                      
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control value={payment_id}   type="text" readOnly />
                      </Col>
                      </Form.Group>

                     
                            </div>
                        </div>
                </div>

            </div>
            </div>
            </div>

  </div>  
  </div>  
  </>
)
}