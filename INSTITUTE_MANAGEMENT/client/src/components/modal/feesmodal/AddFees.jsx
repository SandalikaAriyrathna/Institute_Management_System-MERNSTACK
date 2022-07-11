import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import "../../../style.css";
import axios from "axios";
// import { Component } from "react";
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';


export default function AddFees(props) {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [payment_id, setPaymentID] = useState("");
  const [student_id, setStudentID] = useState("");
  const [name, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");
  const [payment_slip, setPaymentSlip] = useState("ads");
  const [teachers_name, setTeachersName] = useState("");
  const [monthly_fee, setMonthlyFee] = useState("");
  const [subjects, setSubject] = useState("");

  const [file, setFile] = useState(null);

  const [subopt, setSubjectOptions] = useState([]);

  // const checkFee = () => {
  //   // return true;
  //    axios.get(`http://localhost:5000/api/OnlineFeeses/payMon/${month}/${subjects}/${student_id}`)
  //     .then(function (response) {
  //       console.log(response.data.length)
  //       if (response.data.length ===0 ) {
  //         console.log('ddd')
  //         // return true;
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     })
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPaymment = {
      payment_id,
      student_id,
      name,
      grade,
      subjects,
      teachers_name,
      month,
      monthly_fee,
      payment_slip
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPaymment.payment_slip = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }

    // Validation 
    if (name.length === 0 || grade.length === 0 || subjects.length === 0 || teachers_name.length === 0 || month.length === 0 || monthly_fee.length === 0 || payment_slip.length === 0) {
      swal(" Fields Cannot empty !", "Please enter all data !", "error");
    } else{

    console.log(newPaymment)
    axios.post('http://localhost:5000/api/OnlineFeeses',
      newPaymment
    )
      .then(function (response) {
        if(response.status == 201){
          swal(" You have already paid !", "Please enter all data !", "error");
        }else{
          console.log(response);
          setStudentID('')
          setStudentName('')
          setGrade('')
          setMonth('')
          setTeachersName('')
          setMonthlyFee('')
          setSubject('')
          setPaymentSlip('')
          swal({ text: "Successfully Added", icon: "success", button: "Okay!" })
          .then((value) => {
            window.location = '/adminviewfees' + payment_id;
          });
        }
        

      })
      .catch(function (error) {
        console.log(error);

      });


  
  }

}

const getData = async (e) => {
  if (e.keyCode === 13) {
    await axios.get(`http://localhost:5000/api/students/${student_id}`)
      .then(function (response) {
        if (response.data != null) {
          setStudentName(response.data['name'])
          setGrade(response.data['grade'])
          setSubjectOptions(response.data['subjects'])

        } else {
          swal(" invalid student id !", "Please Try Again !", "error");

        }
      })
      .catch(function (error) {
        console.log(error);
        swal(" Details can't search !", "Please Try Again !", "error");

      })
  }
}

const getData2 = async (e) => {
  console.log(e)
  await axios.get(`http://localhost:5000/api/subjects/code/${e.target.value}`)
    .then(function (response) {
      if (response.data != null) {
        setSubject(response.data['subject_name'])
        setTeachersName(response.data['teachers_name'])
        setMonthlyFee(response.data['monthly_fee'])
      } else {
        swal(" invalid subject !", "Please Try Again !", "error");

      }
    })
    .catch(function (error) {
      console.log(error);
      swal(" Details can't search !", "Please Try Again !", "error");

    })
}



return (
  <>

    <Button className='btn-dashb me-5' variant="warning" onClick={handleShow}>
      Add Fees Payment
    </Button>


    <Modal show={show}
      onHide={handleClose}
      size="lg"
      centered
      width="1000px"
    >

      <Modal.Header closeButton>


        <Modal.Title id="contained-modal-title-vcenter">Student Fees Payment Details</Modal.Title>






      </Modal.Header>
      <Modal.Body>


        <Form onSubmit={handleSubmit}>

          <Col sm={12}>

            <br></br>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="3">
                Student ID
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter Student ID " value={student_id} onChange={(e) => setStudentID(e.target.value)} onKeyUp={getData} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="3">
                Student Name
              </Form.Label>
              <Col sm="7">
                <Form.Control value={name} type="text" readonly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="3">
                Grade
              </Form.Label>
              <Col sm="7">
                <Form.Control value={grade} type="text" readonly />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Subject
              </Form.Label>
              <Col sm={7}>
                <select className="Col-3" aria-label="Default select example" style={{ height: "35px", width: "70%" }} onChange={getData2} >
                  <option selected>Select Subject</option>

                  {subopt.map(subject => {
                    return <option value={subject}>{subject}</option>
                  })}
                </select>
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="3">
                Teacher name
              </Form.Label>
              <Col sm="7">
                <Form.Control value={teachers_name} type="text" readonly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Month
              </Form.Label>
              <Col sm={7}>
                <select className="Col-3" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)} style={{ height: "35px", width: "70%" }} required>
                  <option selected>Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Monthly_Fee
              </Form.Label>
              <Col sm="7">
                <Form.Control value={monthly_fee} type="number" readonly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="3">
                Select Payment Slip
              </Form.Label>
              <Col sm="7">
                <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required />
              </Col>
            </Form.Group>

            <Form.Group className="p-2 bd-highlight d-flex flex-column justify-content-center" >
              <MDBCol className='mb-4'>
                {file && (
                  <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" style={{ width: '400px', float: 'center' }} />
                )}
              </MDBCol>
            </Form.Group>


          </Col>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="writeSubmit" type="submit" onClick={handleSubmit} style={{ width: "20%" }}>
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClose} style={{ width: "15%" }}>
          Cancel
        </Button>

      </Modal.Footer>
    </Modal>
  </>
);
}

