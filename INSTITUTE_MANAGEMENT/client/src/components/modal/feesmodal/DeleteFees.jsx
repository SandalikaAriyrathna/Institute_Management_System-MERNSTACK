import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import "../../../style.css";
import swal from 'sweetalert';


export default function DeleteFees(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [payment_id, setPaymentID] = useState("");
  const [student_id, setStudentID] = useState("");
  const [name, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubject] = useState("");
  const [teachers_name, setTeachersName] = useState("");
  const [month, setMonth] = useState("");
  const [monthly_fee, setMonthlyFee] = useState("");
  const [id, setId] = useState("");

  const payment = {
    payment_id :payment_id, student_id:student_id
  }

  const handleDelete = async (e)=> {
    console.log(id)
   await axios.delete(`http://localhost:5000/api/OnlineFeeses/${id}`,payment)
   .then(function (response) {
    console.log(response);  
    setPaymentID('')       
    setStudentID('')
    setStudentName('')
    setGrade('')
    setSubject('')
    setTeachersName('')
    setMonth('')
    setMonthlyFee('')
    
    swal({ text: "Successfully Deleted", icon: "success", button: "Okay!"})
     
      setShow(false );
    })
  .catch(function (error) {
      console.log(error);
      swal(" Details Can't Delete !","Please enter all data !", "error");
     
    })
  }

 

    const getData = async (e)=> {
      if(e.keyCode === 13){
    await axios.get(`http://localhost:5000/api/OnlineFeeses/${payment_id}`)
    .then(function (response) {
      if(response.data != null){
        setId(response.data['_id']);
        setStudentName(response.data['name'])
        setStudentID(response.data['student_id'])
        setGrade(response.data['grade'])
        setSubject(response.data['subjects'])
        setTeachersName(response.data['teachers_name'])
        setMonth(response.data['month'])
        setMonthlyFee(response.data['monthly_fee'])
        
      }else{
        swal(" invalid payment ID!","Please Try Again !", "error");  
    
      }
      })
    .catch(function (error) {
        console.log(error);
        swal(" Details can't search !","Please Try Again !", "error");  
         
      })
    }
    }


  return (
    <>
     
      <Button className='btn-success me-2'  variant="warning" onClick={handleShow} >
        Delete
      </Button>
    
      <Modal show={show}  
      onHide={handleClose}      
        size="lg"
        centered
        width="1000px"
      >
         <Modal.Header closeButton>
      
          <Modal.Title id="contained-modal-title-vcenter">Delete Fees Details</Modal.Title>
     
        </Modal.Header>
        <Modal.Body>


        <Form>




<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Payment ID
  </Form.Label>
  <Col sm="7">
    <Form.Control value={payment_id} type="text"  onChange={(e) => setPaymentID(e.target.value)} onKeyUp={getData }/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student ID
  </Form.Label>
  <Col sm="7">
    <Form.Control value={student_id} type="text" readonly/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student Name
  </Form.Label>
  <Col sm="7">
    <Form.Control value={name} type="text" readonly />
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


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Subject
  </Form.Label>
  <Col sm="7">
    <Form.Control value={subjects}  type="text"  readonly />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Teacher Name
  </Form.Label>
  <Col sm="7">
    <Form.Control value={teachers_name}  type="text"  readonly />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Month
  </Form.Label>
  <Col sm="7">
    <Form.Control value={month}  type="text"  readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Monthly Fee
  </Form.Label>
  <Col sm="7">
    <Form.Control  value={monthly_fee} type="number"  readonly />
  </Col>
</Form.Group>


</Col>
</Form>

      </Modal.Body>
      <Modal.Footer>


        <Button variant="danger" onClick={(e) => { handleDelete(props.dpayment_id, e) }} style={{width:"20%"}}>
            Delete
          </Button>
      
      
          <Button variant="secondary" onClick={handleClose}  style={{width:"15%"}}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}