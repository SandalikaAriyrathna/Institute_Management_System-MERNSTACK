import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import '../../../style.css'


export default function ViewAllUpdatePayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [salary, setSalary] = useState("");

  const paymentData ={
    salary 
  }

  const onUpdate=()=>{
    //console.log(props.PID)
   
     axios.put('http://localhost:8080/api/payments/updatepay/'+props.PID,paymentData)
     .then(res=> {
       
       //console.log("Updated",res)
       setShow(false)
  })
  
     .catch(err=>console.log(err))
     
     }; 

 
  return (
    <>
      <Button className='btn btn-primary me-2' onClick={handleShow}>
      Update
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Updatet</Modal.Title>
           
        </Modal.Header>
        <Modal.Body>


        <Form>

  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
       EmployeeID:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text"  value={props.upEID} disabled/>
    </Col>
    
    </Form.Group>
  </fieldset>


  <fieldset>
  <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee Type:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text" value={props.upEtype } disabled/>
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
  <Form.Control type="text"  value={props.upName} disabled/>
</Col>

</Form.Group>
</fieldset>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
Month
</Form.Label>
<Col sm="5">
  <Form.Control type="date"  value={props.upMonth} disabled/>
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount(Current)
</Form.Label>
<Col sm="5">
  <Form.Control type="text" style={{ height: "35px", width: "40%" }} value={props.upSalary} disabled />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount(New)
</Form.Label>
<Col sm="5">
  <Form.Control  type="text" placeholder="Enter New Amount "  onChange={(e)=>{setSalary(e.target.value)} } required />
</Col>
</Form.Group>
</Form>

  </Modal.Body>
    <Modal.Footer>
    <Button variant="success" onClick={(e)=>onUpdate()} >
        Update Payment
      </Button>
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
     
    </Modal.Footer>
  </Modal>
</>
);
}