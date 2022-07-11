import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";
import axios from 'axios';


export default function AddExModal(props) {
  const [show, setShow] = useState(false);

  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const scheduleData = {
    grade,
    subject,
    date,
    time,
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(scheduleData);
    axios.post('http://localhost:5000/api/exam_schedules/addexam', scheduleData).then(function (res) {
      console.log(res);
      setGrade("");
    })
      .catch(function (error) {
        console.log(error);
      })
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-dashb me-5' onClick={handleShow}>
        Add Schedule
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Add Exam Schedule</Modal.Title>

        </Modal.Header>


        <Form onSubmit={handleSubmit}>
          <Modal.Body>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Grade:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "40%" }} onChange={(e) => { setGrade(e.target.value) }}>
                    <option selected>Select grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
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
                    <option selected>Select subject</option>
                    <option value="English">English</option>
                    <option value="Maths">Maths</option>
                    <option value="ICT">ICT</option>
                  </select>
                </Col>

              </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Date
              </Form.Label>
              <Col sm="5">
                <Form.Control type="date" onChange={(e) => { setDate(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Time
              </Form.Label>
              <Col sm="5">
                <Form.Control type="time" onChange={(e) => { setTime(e.target.value) }} />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Add Schedule
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>

          </Modal.Footer>

        </Form>
      </Modal>

    </>
  );
}