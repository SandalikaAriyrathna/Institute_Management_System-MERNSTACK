import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";
import axios from 'axios';

export default function CanExModal({canex}) {
    const [show, setShow] = useState(false);

    // const location = useLocation();
    // const path = location.pathname.split("/")[2];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleDelete = async()=>{
    //     try{
    //         await axios.delete("/exam_schedules/" + path);
    //         windows.location.replace("/")
    //     }catch(err){}


    // }
    return (
        <>
            <Button className='btn-danger me-2' onClick={handleShow}>
                Cancel
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Exam Schedule</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Grade:
                                        
                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <select value={canex.grade} className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled>
                                        
                                        {/* <option value="1">Grade 1</option>
                                        <option value="2">Grade 2</option>
                                        <option value="3">Grade 3</option> */}
                                    </select>
                                </Col>

                            </Form.Group>
                        </fieldset>
                        
                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Subject
                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled>
                                        <option value="2" selected={canex.subject=="2"}>Maths</option>
                                        <option value="3" selected={canex.subject=="3"}>ICT</option>
                                        <option value="4" selected={canex.subject=="4"}>Science</option>
                                    </select>
                                </Col>

                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date" disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="time" disabled/>
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Delete Schedule
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
