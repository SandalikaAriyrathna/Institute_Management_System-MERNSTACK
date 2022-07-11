import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';

import StudentSidebar from '../components/StudentSidebar'
import Header from '../components/Header';

export default function StudentProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Header/>
      <StudentSidebar/>
      <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-9  ">
        <Form>
            <fieldset>
            <Form.Group as={Col} className="p-2 bd-highlight">
                <Col>
                <Form.Label as="legend" column sm={2}>
                    <b><h2>
                        Student_Image
                    </h2></b>
                </Form.Label>
                </Col>

                <Col sm={7}>
                <MDBCol lg='4' md='12' className='mb-4'>
                <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
                </MDBCol>
                </Col>
                <Col sm={7}>
                <Button variant="secondary" onClick={handleClose}>
                    Edit Image
                </Button>
                </Col>
            </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Full Name  
            </Form.Label>
            <Col sm="7">
                <Form.Control type="text" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
            Age
            </Form.Label>
            <Col sm="5">
                <Form.Control type="date" />
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
            <Form.Label column sm="2">
            Exam Year
            </Form.Label>
            <Col sm="5">
                <Form.Control type="date" />
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
                />
                <Form.Check
                inline
                label="A/L"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
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
                <Form.Control type="text" />
            </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Email Address 
            </Form.Label>
            <Col sm="7">
                <Form.Control type="text" />
            </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Address 
            </Form.Label>
            <Col sm="7">
                <Form.Control type="textarea" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
            Phone Number
            </Form.Label>
            <Col sm="7">
                <Form.Control type="text" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Grade 
            </Form.Label>
            <Col sm="7">  
                <Form.Control type="text"/>
            </Col>
            </Form.Group>
 
        </Form>
        </div>
        </div>
    </div>
  )
}
