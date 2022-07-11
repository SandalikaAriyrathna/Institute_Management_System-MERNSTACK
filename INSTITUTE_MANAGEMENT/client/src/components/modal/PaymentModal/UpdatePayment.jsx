import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import '../../../style.css'


export default function UpdatePayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [paymentId,setPaymentId] = useState('');

  const [employee_ID, setEmployeeID] = useState("");
  const [employee_type, setEmployeeType] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth ]= useState("");
  const [salary, setSalary] = useState("");

  const updateData ={
    employee_ID ,
    employee_type ,
    name,
    month ,
    salary 
  }

  const updateShow = () => {
    //console.log(props.paymentId)
    setPaymentId(props.paymentId)
  axios.get(`http://localhost:8080/api/payments/`+props.paymentId).then(function(response) {
   // console.log(response);
    setEmployeeID(response.data['employee_ID']);
    setEmployeeType(response.data['employee_type']);
    setName(response.data['name']);
    setMonth(response.data['month']);
    setSalary(response.data['salary']);
    setShow("true")
  }).catch(function(error) {
    console.log(error);
    alert('invalid')
  });
  };

  function submitForm(e){
    e.preventDefault();
    //console.log(updateData);
    axios.put('http://localhost:8080/api/payments/updatepay/'+props.paymentId,updateData)
    .then(function (response) {
     console.log(response);
      setEmployeeID('');
      setEmployeeType('');
      setName('');
      setMonth('');
      setSalary('');
      setShow(false);
      alert("Updated SuccessFully")
      window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


 
  return (
    <>
      <Button className='btn btn-primary me-2'  type="submit" onClick={updateShow}>
      Update
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Update Salary Payment</Modal.Title>
           
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
      <Form.Control type="text"  value={employee_ID} disabled/>
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
      <Form.Control type="text" value={employee_type} disabled/>
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
  <Form.Control type="text"  value={name} disabled/>
</Col>

</Form.Group>
</fieldset>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
Month
</Form.Label>
<Col sm="5">
  <Form.Control type="date"  value={month} disabled/>
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount(Current)
</Form.Label>
<Col sm="5">
  <Form.Control type="text" style={{ height: "35px", width: "40%" }} value={salary} disabled />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
<Form.Label column sm="2">
Amount(New)
</Form.Label>
<Col sm="5">
  <Form.Control  type="text" placeholder="Enter New Amount "  onChange={(e)=>{setSalary(e.target.value)} } required/>
</Col>
</Form.Group>
</Form>

  </Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={submitForm} >
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