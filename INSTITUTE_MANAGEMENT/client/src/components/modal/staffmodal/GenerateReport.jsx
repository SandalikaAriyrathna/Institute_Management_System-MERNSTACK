import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';

export default function GenerateReport(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
 
  
  const [radio,setRadio] = useState('false')

  return (
    <>
      <Button className="btn-dashbc" variant="primary" onClick={handleShow}>
      Generate Report
      </Button>

    </>
  );
}