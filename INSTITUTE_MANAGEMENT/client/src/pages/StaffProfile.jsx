import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import StaffSidebar from '../Components/staffSidebar/StaffSidebar';


export default function StaffProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
  <StaffSidebar/>
  <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-9  ">
  <Form>

  <Col sm={5}>
  <fieldset>

    <Form.Group  className="p-2 bd-highlight" >
      
        <Form.Label as="legend" column sm={2}>
        <h2><b> Staff_Image</b></h2>
        </Form.Label>

      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
      </MDBCol>
     
      
      <button class="btn btn-primary"><i class="fa fa-facebook"></i>Edit Profile</button>
    
      
    </Form.Group>
  </fieldset>
  </Col>

  <Col sm={10}>
  <Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label as="legend" column sm={3}>
      Employment Type
      </Form.Label>
      <Form.Check
        inline
        label="Academic"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Non-Academic"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
   
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
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"40%"}}>
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
      <Form.Control type="textarea" placeholder="Enter your Address"  required/>
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
    <Form.Label column sm="2">
    Position 
    </Form.Label>
    <Col sm={10}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"40%"}}>
      <option selected>Select Position</option>
      <option value="1">Receptionist</option>
      <option value="2">Gardner</option>
    </select>
    </Col>
  </Form.Group>
  </Col>
</Form> 
</div>
</div>
</> 
  );
}