import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from'axios';

import '../../../style.css'


export default function AddPayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employee_ID, setEmployeeID] = useState("");
  const [employee_type, setEmployeeType] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth ]= useState("");
  const [salary, setSalary] = useState("");

  const paymentData ={
    employee_ID ,
    employee_type ,
    name,
    month ,
    salary 
  }

  function submitForm(e){
    e.preventDefault();
    //console.log(paymentData);
    axios.post(`http://localhost:8080/api/payments`,paymentData)
    .then(function (response) {
     // console.log(response);
      setEmployeeID('');
      setEmployeeType('');
      setName('');
      setMonth('');
      setSalary('');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        Add Salary Payment
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Add Salary Payment</Modal.Title>
           
        </Modal.Header>
        
  <Form onSubmit={submitForm}>
        <Modal.Body>

  
        <fieldset>
  <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee ID:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text" onChange={(e)=>{setEmployeeID(e.target.value)}} />
    </Col>
    
    </Form.Group>
  </fieldset>



  {/* <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee ID:
      </Form.Label>
    </Col>
    <Col sm={10}>
    <select className="Col-3" aria-label="Default select example" onChange={(e)=>{setEmployeeID(e.target.value)}} style={{height:"35px", width:"40%"}}>
      <option selected>Select Employee ID</option>
      <option value="1">a</option>
      <option value="2">b</option>
      <option value="3">c</option>
    </select>
    </Col>
    
    </Form.Group>
  </fieldset> */}

  <fieldset>
  <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee Type:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text" onChange={(e)=>{setEmployeeType(e.target.value)}}/>
    </Col>
    
    </Form.Group>
  </fieldset>

  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
       Name:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}}/>
    </Col>
    
    </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Month
    </Form.Label>
    <Col sm="5">
      <Form.Control type="date" onChange={(e)=>{setMonth(e.target.value)}}/>
    </Col>
  </Form.Group>
    
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Salary
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" onChange={(e)=>{setSalary(e.target.value)}}/>
    </Col>
  </Form.Group>

      </Modal.Body>
  
        <Modal.Footer>
        <Button variant="success"  type ="submit" onClick={handleClose}>
            Add Payment
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
        </Form>
      </Modal>  
    </>
  );
}