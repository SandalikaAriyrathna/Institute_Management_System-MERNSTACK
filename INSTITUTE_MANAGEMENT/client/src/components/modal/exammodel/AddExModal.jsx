import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
// import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";
import axios from 'axios';
import swal from 'sweetalert'


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

    if (grade.length === 0 || subject.length === 0 || date.length === 0 || time.length === 0) {
      swal(" Fields Cannot be empty !", "Please enter all data !", "error");
    }
    else{
    console.log(scheduleData);
    axios.post('http://localhost:5000/api/exam_schedules/addexam', scheduleData).then(function (res) {
      // alert("Added Successfully");
      console.log(res);
      setGrade("");
      setSubject("");
      setDate("");
      setTime("");
    })
      .catch(function (error) {
        console.log(error);
      })
      swal({ text: "Exam Successfully Added", icon: "success", button: "Okay!"}).then((value) => {
        window.location = '/exam'; 
     });
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function disableDates(){
    var today,dd,mm,yyyy;
    today = new Date();
    dd = today.getDate()+1;
    mm = today.getMonth()+1;
    yyyy = today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;
  }

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
                    <option selected>Select subject</option>
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
                <Form.Control type="date" min={disableDates()} onChange={(e) => { setDate(e.target.value) }} />
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
              Exit
            </Button>

          </Modal.Footer>

        </Form>
      </Modal>

    </>
  );
}