import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default function UpdExModal(props) {
    const [eScheduleID, seteScheduleID] = useState("");
    const [show, setShow] = useState(false);
    const [exam_schedules, setexamSchedules] = useState([]);
    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

   
    const scheduleData = {
        grade,
        subject,
        date,
        time
    }

    const updateShow = () => {
        console.log(props.eid)
        seteScheduleID(props.eid)
        axios.get("http://localhost:5000/api/exam_schedules/" + props.eid).then(function (response) {
            setGrade(response.data['grade']);
            setSubject(response.data['subject']);
            setDate(response.data['date']);
            setTime(response.data['time']);
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        // console.log(studentData);
        axios.put('http://localhost:5000/api/exam_schedules/updateexam/' + props.eid, scheduleData)
            .then(function (response) {
                // console.log(response);
                setGrade('');
                setSubject('');
                setDate('');
                setTime('');
                setShow(false);
                swal({ text: "Exam Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/examview';
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='btn-success me-2' onClick={updateShow}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Exam Schedule</Modal.Title>

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
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} onChange={(e) => { setGrade(e.target.value) }}>
                                        <option selected>{grade}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
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
                                    <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} onChange={(e) => { setSubject(e.target.value) }}>
                                        <option selected>{subject}</option>
                                        <option value="English">English</option>
                                        <option value="Maths">Maths</option>
                                        <option value="ICT">ICT</option>
                                        <option value="Science">Science</option>
                                    </select>
                                </Col>

                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="time" value={time} onChange={(e) => { setTime(e.target.value) }} />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Schedule
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
