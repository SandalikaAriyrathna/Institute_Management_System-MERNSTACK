import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';


export default function UpdateModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Button variant='success' class="btn btn-success mr-2" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>

        </Modal.Header>
        <Modal.Body>

          <div>
            <h1>Update a schedule</h1> <br />
            <form>
              <div class="mb-3">
                <label for="grade" class="form-label">Grade</label>
                <select class="form-select" aria-label="Default select example">
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="Grade 13">Grade 13</option> 
                </select>
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <select class="form-select" aria-label="Default select example">
                <option value="Mathematics">Mathematics</option>
                <option value="Buddhism">Buddhism</option>
                <option value="History">History</option>
                <option value="Art">Art</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Geography">Geography</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Teacher Name</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="Mr. Anuradha">Mr. Anuradha</option>
                  <option value="Mr. Amal">Mr. Amal</option>
                  <option value="Mrs. Hansi">Mrs. Hansi</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="day" class="form-label">Day of Week</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="time" class="form-label">Time</label>
                <input type="time" id="inputTime" class="form-control" placeholder="08.30-10.30" />
              </div>
              <div class="mb-3">
                <label for="hallNo" class="form-label">Hall No.</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="IMS01">IMS01</option>
                  <option value="IMS02">IMS02</option>
                  <option value="IMS03">IMS03</option>
                  <option value="IMS04">IMS04</option>
                  <option value="IMS05">IMS05</option>
                  <option value="IMS06">IMS06</option>
                  <option value="IMS07">IMS07</option>
                  <option value="IMS08">IMS08</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="webinarLink" class="form-label">Webinar Link</label>
                <input type="text" id="inputLink" class="form-control" placeholder="www.zoom.us"/>
              </div>

            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Update schedule
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}