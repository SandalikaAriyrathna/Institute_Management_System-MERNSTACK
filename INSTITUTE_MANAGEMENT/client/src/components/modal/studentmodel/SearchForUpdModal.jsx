import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import '../../../style.css'
import UpdateStdModel from './UpdateStdModal';

export default function SearchForUpdModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [studentId, setStudentId] = useState('');
    


  return (
    <>

        <Button className='btn-dashb me-5' onClick={handleShow}>
            Update Student
        </Button>


        <Modal show={show}        
            size="lg"
            centered
        >
            <Modal.Header>
            <div class="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Search Student Id</Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>

       

    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={20}>
    <div class="col-md-12 text-center">
    <Form.Label>
    Student ID:
    </Form.Label>
    </div>
    </Col>
    <Col  sm={10}>
    <Form.Control  type="text" onChange={(e)=>{setStudentId(e.target.value)}}></Form.Control> 
    </Col>
    </Form.Group>
    </fieldset>
 

    </Modal.Body>
        <Modal.Footer>
        <UpdateStdModel  studentId={studentId}/>
        
        <Button variant="danger" onClick={handleClose}>
            Cancel
        </Button>
        
        </Modal.Footer>
    </Modal>
    
    </>
  )
}
