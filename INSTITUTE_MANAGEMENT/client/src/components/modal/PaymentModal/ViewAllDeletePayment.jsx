import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import '../../../style.css'


export default function ViewAllDeletePayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete=(paymentid,e)=>{
    e.preventDefault();
     axios.delete(`http://localhost:8080/api/payments/deletepay/${paymentid}`)
     .then(res=>console.log("Deleted",res))
     .catch(err=>console.log(err))
     
     }; 
  return (
    <>
      <Button className='btn btn-primary me-2' onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Delete Salary Payment</Modal.Title>
           
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
      <Form.Control type="text"  value={props.dltEID} disabled/>
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
      <Form.Control type="text" value={props.dltEtype } disabled/>
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
  <Form.Control type="text"  value={props.dltName} disabled/>
</Col>

</Form.Group>
</fieldset>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
Month
</Form.Label>
<Col sm="5">
  <Form.Control type="date"  value={props.dltMonth} disabled/>
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount
</Form.Label>
<Col sm="5">
  <Form.Control type="text"  value={props.dltSalary} disabled />
</Col>
</Form.Group>
</Form>

  </Modal.Body>
    <Modal.Footer>
    <Button variant="success" onClick={(e)=>onDelete(props.PID,e)}>
        Delete Payment
      </Button>
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
     
    </Modal.Footer>
  </Modal>
</>
);
}