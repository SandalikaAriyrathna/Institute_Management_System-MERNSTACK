import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import { Col, Row, Form } from "react-bootstrap";
import "../../../style.css";
import axios from "axios";
import swal from 'sweetalert';

export default function PhysicalUpdateFees(props) {

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
  const [id, setId] = useState("");
  const [subopt, setSubjectOptions] = useState([]);
  
  const payment = {
    payment_id :payment_id,
    student_id,
    name,
    grade,
    subjects,
    teachers_name,
    month,
    monthly_fee
  }

  const handleUpdate = async (e)=> {
    console.log(id)
   await axios.put(`http://localhost:5000/api/PhysicalFeeses/${id}`,payment)
   .then(function (response) {
    console.log(response);  
    setPaymentID('')       
    setStudentID('')
    setStudentName('')
    setGrade('')
    setSubject('')
    setMonth('')
    setTeachersName('')
    setMonthlyFee('')
    
    swal({ text: "Successfully Updated", icon: "success", button: "Okay!"})
   
      setShow(false );
    })
  .catch(function (error) {
      console.log(error);
      swal(" Details not updated !","Please Try Again !", "error");    
    })
  }

  const getData = async (e)=> {
      if(e.keyCode === 13){
    await axios.get(`http://localhost:5000/api/PhysicalFeeses/${payment_id}`)
    .then(function (response) {
      if(response.data != null){
        setId(response.data['_id']);
        setStudentID(response.data['student_id']);
        setStudentName(response.data['name'])
        setGrade(response.data['grade'])
        setSubject(response.data['subjects'])
        setTeachersName(response.data['teachers_name'])
        setMonth(response.data['month'])
        setMonthlyFee(response.data['monthly_fee'])
        
      }else{
        swal(" invalid payment !","Please Try Again !", "error");  
        
      }
      })
    .catch(function (error) {
        console.log(error);
        swal(" Details not updated !","Please Try Again !", "error");  
            
      })
    }
    }

    useEffect(() => {
      if(student_id !== '')
        getSubs();
    }, [student_id]);
    
    
  
    const getSubs = () => {
     
     axios.get(`http://localhost:5000/api/students/${student_id}`)
    .then(function (response) {
      if(response.data != null){
        setSubjectOptions(response.data['subjects'])
        
      }else{
        swal(" invalid student id !","Please Try Again !", "error");  
      
      }
      })
    .catch(function (error) {
        console.log(error);
        swal(" Details can't search !","Please Try Again !", "error");  
      
         
      })
    
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
        swal(" invalid subject !","Please Try Again !", "error");  
    
      }
      })
    .catch(function (error) {
        console.log(error);
        swal(" Details can't search !","Please Try Again !", "error");  
          
      })
    }


  return (
    <>
     
      <Button type="button" className='btn-success me-2'  variant="warning" onClick={handleShow} >
                 Update
              </Button>

              <Modal show={show}  
      onHide={handleClose}      
        size="lg"
        centered
        width="1000px"
      >
        <Modal.Header closeButton>
      
          <Modal.Title id="contained-modal-title-vcenter">Update Fees Details</Modal.Title>
     
        </Modal.Header>
        <Modal.Body>


        <Form onSubmit={handleUpdate}>




<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Payment ID
  </Form.Label>
  <Col sm="7">
    <Form.Control  type="text"  onChange={(e) => setPaymentID(e.target.value)} onKeyUp={getData }/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student ID
  </Form.Label>
  <Col sm="7">
    <Form.Control value={student_id} type="text"  onChange={(e) => setStudentID(e.target.value)} onChangeCapture={getSubs} required/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student Name
  </Form.Label>
  <Col sm="7">
    <Form.Control  value={name} type="text" readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Grade
  </Form.Label>
  <Col sm="7">
    <Form.Control value={grade}  type="text"  readonly />
  </Col>
</Form.Group>




<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Subject
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example"  style={{height:"35px", width:"70%"}} onChange={getData2} >
  <option selected value={subjects}>{subjects}</option>
   
    {subopt.map(subject=>{
      return <option value={subject}>{subject}</option>
    })}
  </select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Teacher Name
  </Form.Label>
  <Col sm="7">
    <Form.Control  value={teachers_name}  type="text" readonly />
  </Col>
</Form.Group>

 
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
 Month
  </Form.Label>
  <Col sm={7}>
  <select value={month}  className="Col-3" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)} style={{height:"35px", width:"70%"}} required>
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
  Monthly Fee
  </Form.Label>
  <Col sm="7">
    <Form.Control  value={monthly_fee}  type="number"  readonly />
  </Col>
</Form.Group>


</Col>
</Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleUpdate} style={{width:"20%"}}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleClose}  style={{width:"15%"}}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}