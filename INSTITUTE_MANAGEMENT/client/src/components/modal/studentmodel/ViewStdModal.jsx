import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css"
import axios from 'axios';

export default function ViewStdModel(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [name , setname] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [exam_year , setExamYear] = useState("");
  const [exam , setExam] = useState("");
  const [school , setSchool] = useState("");
  const [phone_number , setMnumber] = useState("");
  const [address , setAddress] = useState("");
  const [email_address , setEmail] = useState("");
  const [grade , setGrade] = useState("");
  const [username , setUserName] = useState("");

       axios.get("http://localhost:5000/api/students/"+props.student_id).then(function (response) {
        console.log(response);
        setname(response.data['name']);
        setAge(response.data['age']);
        setGender(response.data['gender']);
        setExamYear(response.data['exam_year']);
        setExam(response.data['exam']);
        setSchool(response.data['school']);
        setMnumber(response.data['phone_number']);
        setAddress(response.data['address']);
        setEmail(response.data['email_address']);
        setGrade(response.data['grade']);
        setUserName(response.data['username']);
      })

  return (
    <>
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Student Details</Modal.Title>
        </div>  
        </Modal.Header>
        <Modal.Body>

  <Form>
    <fieldset>
      <Form.Group as={Col} className="p-2 bd-highlight">
        <Col>
          <Form.Label as="legend" column sm={2}>
          Student_Image
          </Form.Label>
        </Col>

        <Col sm={7}>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
        </MDBCol>
        </Col>
        <Col>
          <Button variant="warning" onClick={handleClose}>
              Add Image
          </Button>
        </Col>
      </Form.Group>
    </fieldset>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Full Name  
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Full Name " value={name} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Age
      </Form.Label>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter your age" value={age}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Gender
      </Form.Label>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter your gender" value={gender}/>
      </Col>
    </Form.Group>
    
    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Exam Year
      </Form.Label>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter your Exam Year " value={exam_year}/>
      </Col>

      <Col>
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Label as="legend" column sm={1}>
        </Form.Label>
        <Form.Check
          inline
          label="O/L"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          // value={}
        />
        <Form.Check
          inline
          label="A/L"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          // value={}
        />
      </div>
    ))}
        </Col>
      
      </Form.Group>
    </fieldset>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      School
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your School" value={school}/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Email Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="Email" placeholder="Enter your  Email Address" value={email_address}/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="textarea" placeholder="Enter your Address" value={address}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Phone Number
      </Form.Label>
      <Col sm="7">
        <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength="10" value={phone_number}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Grade 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Grade" value={grade}/>
      </Col>
    </Form.Group>
 
</Form>

      </Modal.Body>
      

    </>
  );
}