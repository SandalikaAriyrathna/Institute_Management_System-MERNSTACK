import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';


export default function ViewModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-dashb me-5 " variant="primary" onClick={handleShow}>
      View staff member
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter" className='container'>Staff Profile</Modal.Title>
        </div>
         
        </Modal.Header>
        <Modal.Body>


  <Form>

  <Col sm={12}>
  <Form>
  
  
</Form>

<br></br>
  
  
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
   Staff Name :  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Staff ID :  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
    <Form.Label column sm="2">
    Age :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Gender :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  
  

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Email Address: 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" required />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Address:
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Phone Number:
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Employment Type:
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Working Hours:
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" required />
    </Col>
  </Form.Group>
  
  </Col>
  
</Form>


      </Modal.Body>
        <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
            Create Staff
          </Button> */}
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}