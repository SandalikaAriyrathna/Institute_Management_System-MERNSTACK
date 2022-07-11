import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';


export default function CancelModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant='danger' class="btn btn-danger" onClick={handleShow}>
        Cancel
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
        <h1>Cancel a schedule</h1> <br/>
      <form>
  <div class="mb-3">
  <label for="grade" class="form-label">Grade</label>
  <input type="text" id="deleteGrade" class="form-control" readOnly/>
  </div>
  <div class="mb-3">
    <label for="subject" class="form-label">Subject</label>
    <input type="text" id="deleteSubject" class="form-control" readOnly/>
  </div>
  <div class="mb-3">
  <label for="teacherName" class="form-label">Teacher Name</label>
    <input type="text" id="deleteTname" class="form-control" readOnly/>
  </div>
  <div class="mb-3">
    <label for="day" class="form-label">Day of Week</label>
    <input type="text" id="deleteDay" class="form-control" readOnly/>
  </div>

  <div class="mb-3">
      <label for="time" class="form-label">Time</label>
      <input type="text" id="deletTime" class="form-control" readOnly/>
  </div>
  <div class="mb-3">
    <label for="hallNo" class="form-label">Hall No.</label>
    <input type="text" id="deleteHallNo" class="form-control" readOnly/>
  </div>
  <div class="mb-3">
      <label for="webinarLink" class="form-label">Webinar Link</label>
      <input type="text" id="deleteLink" class="form-control" readOnly/>
    </div>

</form>
    </div>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
            Cancel schedule
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}