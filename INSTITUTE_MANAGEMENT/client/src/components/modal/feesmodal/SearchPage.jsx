import React from "react";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../../../style.css";
import StudentFeesFormView from "../../StudentFeesFormView";



const SearchPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   <div className="col-md-12 d-flex justify-content-end">
   <button type="button" class="btn btn-info "  onClick={handleShow} style={{height:"40px",width:"250px"}} >
            <i class="fas fa-search d-flex justify-content-center">SEARCH</i>
         
          </button>

   </div>
   
  
     <Modal show={show}  
      onHide={handleClose}      
        size="lg"
        centered
        width="1000px"
      >

      
        <Modal.Header closeButton>
       
          <Modal.Title id="contained-modal-title-vcenter">Student Payment Details</Modal.Title>
     
        </Modal.Header>


        <Modal.Body>


               <StudentFeesFormView/>

      </Modal.Body>
      <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default SearchPage;
