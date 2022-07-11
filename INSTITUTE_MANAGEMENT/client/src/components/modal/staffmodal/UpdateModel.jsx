import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';

export default function UpdateModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
 
  
  const [radio,setRadio] = useState('false')

  return (
    <>
      <Button className="btn-dashb me-5" variant="primary" onClick={handleShow}>
      Update staff member
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Update Staff Memeber</Modal.Title>
         </div> 
        </Modal.Header>
        <Modal.Body>


  <Form>
  <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>

    <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center" >
      
      <MDBCol  className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
      </MDBCol>
     
     
        <Button variant="secondary" className='justify-content-center' onClick={handleClose}>
            Select Image
        </Button>
      
    </Form.Group>
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>
  <Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label as="legend" column sm={3}>
      Employment Type
      </Form.Label >
      <Form.Check
        inline label="Academic"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        value = 'Academic'
        onChange={(e)=>{setRadio(e.target.value)}}
      />
      <Form.Check
        inline label="Non-Academic"
        name="group1"
        type={type}
        value = 'nonAcademic'
        id={`inline-${type}-2`}
        onChange={(e)=>{setRadio(e.target.value)}}
      />
    </div>
  ))}
</Form>


<br></br>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Full Name  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Full Name " />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Age
    </Form.Label>
    <Col sm="5">
      <Form.Control type="date" placeholder="Enter your age" />
    </Col>
  </Form.Group>

  <Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label as="legend" column sm={2}>
      Gender
      </Form.Label>
      <Form.Check
        inline
        label="Male"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Female"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
</Form>

  
  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Core Subject
      </Form.Label>
    </Col>
    <Col sm={10}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"40%"}} disabled={radio === "nonAcademic"}>
      <option selected>Select core subject</option>
      <option value="1">English</option>
      <option value="2">Maths</option>
      <option value="3">ICT</option>
    </select>
    </Col>
    
    </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Email Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="Email" placeholder="Enter your  Email Address"  required />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter your Address"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Phone Number
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="tel" placeholder="Enter your Phone Number" maxLength="10"  required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2"  >
    Position 
    </Form.Label>
    <Col sm={10}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"40%"}} disabled={radio === "Academic"}>
      <option selected>Select Position</option>
      <option value="1">Receptionist</option>
      <option value="2">Gardner</option>
    </select>
    </Col>
  </Form.Group>
  </Col>
</Form>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Update Staff
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
         
        </Modal.Footer>
      </Modal>
    </>
  );
}