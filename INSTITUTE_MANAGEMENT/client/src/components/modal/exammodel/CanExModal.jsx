import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
// import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";
import axios from 'axios';
import swal from 'sweetalert'

export default function CanExModal(props) {
    // const [exam_schedules, setexamSchedules] = useState([]);
    // const [show, setShow] = useState(false);


    const [eScheduleID, seteScheduleID] = useState("");
    const [show, setShow] = useState(false);
    const [exam_schedules, setexamSchedules] = useState([]);
    // const EsID = props.eid;
    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // function updateSchedule(){
    //     let item = {grade, subject, date, time}
    //     console.warn("item", item)
    // }
    const scheduleData = {
        grade,
        subject,
        date,
        time
    }

    const DeleteShow = () => {
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
        axios.delete("http://localhost:5000/api/exam_schedules/deleteexam/" + props.eid)
            .then(function (response) {
                setShow(false);
                swal({ text: "Exam Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
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
            <Button className='btn-danger me-2' onClick={DeleteShow}>
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


                    <Form >

                        <fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Grade:

                                    </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <input type="text" value={grade} className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled />
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
                                    <input type="text" value={subject} className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} disabled />
                                </Col>

                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date" value={date} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="time" value={time} disabled />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Delete Schedule
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
