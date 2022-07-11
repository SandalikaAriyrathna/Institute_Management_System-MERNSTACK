import React from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SearchExamModal from "../modal/exammodel/SearchExamModal";
import PrintReportModal from "../modal/exammodel/PrintReportModal";


const SearchReport = (props) => {

  const [show, setShow] = useState(false);
  const [exam_schedules, setexamSchedules] = useState(false);
  const handleClose = () => setShow(false);

  function searchId(e) {
    if (e.keyCode == 13) {
      setShow(true);
    }
  }
  return (

    <div>
      <div class="row">
        <div class="col-sm-10"></div>
        <div class="col-sm-5"></div>
        <MDBCol md="4">

          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search grade..." aria-label="Search" onChange={(e) => { setexamSchedules(e.target.value) }} onKeyDown={(e) => searchId(e)} />

        </MDBCol>
      </div>
      <Modal show={show}
        size="lg"
        centered
      >
        <PrintReportModal exam_schedules={exam_schedules} />
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
}

export default SearchReport;