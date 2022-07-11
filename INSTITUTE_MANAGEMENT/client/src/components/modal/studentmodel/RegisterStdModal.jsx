import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import "../../../style.css"
import { StyledEngineProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import ColorCheckboxes from './CheckBoxes.tsx';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RegisterStdModel(props) {
  const [show, setShow] = useState(false);

  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [exam_year, setExamYear] = useState("");
  const [exam, setExam] = useState("");
  const [school, setSchool] = useState("");
  const [phone_number, setMnumber] = useState("");
  const [address, setAddress] = useState("");
  const [email_address, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState([false, false, false]);

  const handleChange = e => {

    if (e.target.checked === true) {
      setSubjects([...subjects, e.target.value]);
    } else {
      const selectedAcc = subjects.filter(a => {
        if (a === e.target.value) return false;
        return true;
      });
      setSubjects([...selectedAcc]);
    }
    // console.log(subjects);
  };

  


  function submitForm(e) {
    e.preventDefault();

    const studentData = {
      name,
      age,
      gender,
      address,
      school,
      exam_year,
      email_address,
      grade,
      subjects,
      phone_number,
      username,
      password
    }
    console.log(studentData);
    axios.post('http://localhost:5000/api/StudentAuth/register', studentData)
      .then(function (response) {
        console.log(response);
        setname('');
        setAge('');
        setGender('');
        setExamYear('');
        setExam('');
        setSchool('');
        setMnumber('');
        setAddress('');
        setEmail('');
        setGrade('');
        setSubjects('');
        setUserName('');
        setPassword('');
        setChecked([false, false, false])
        alert("successfully added.");
      })
      .catch(function (error) {
        console.log(error);
        alert("not added");
      });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        Create Student
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>
          <div class="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Student Register</Modal.Title>
          </div>
        </Modal.Header>
        <Form onSubmit={submitForm}>
          <Modal.Body>



            <fieldset>
              <Form.Group as={Col} className="p-2 bd-highlight">

                <Col sm={7}>
                  <MDBCol lg='4' md='12' className='mb-4'>
                    <img src='https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png' className='img-fluid rounded' alt='' />
                  </MDBCol>
                </Col>
                <Col>
                  <Button variant="warning" onClick={handleClose}>
                    Add Image
                  </Button>
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Full Name
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter your Full Name " onChange={(e) => { setname(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Age
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Enter your age" onChange={(e) => { setAge(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Gender
                  </Form.Label>
                  <Form.Check
                    inline
                    label="Male"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value="Male"
                    onChange={(e) => { setGender(e.target.value) }}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="Female"
                    onChange={(e) => { setGender(e.target.value) }}
                  />
                </div>
              ))}
            </Form>


            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Exam Year
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Enter your Exam Year " onChange={(e) => { setExamYear(e.target.value) }} />
                </Col>

                <Col>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Label as="legend" column sm={1}>
                      </Form.Label>
                      <Form.Check
                        inline
                        label="O/L"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="O/L"
                        onChange={(e) => { setExam(e.target.value) }}
                      />
                      <Form.Check
                        inline
                        label="A/L"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value='A/L'
                        onChange={(e) => { setExam(e.target.value) }}
                      />
                    </div>
                  ))}
                </Col>

              </Form.Group>
            </fieldset>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                School
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter your School" onChange={(e) => { setSchool(e.target.value) }} />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="Email" placeholder="Enter your  Email Address" onChange={(e) => { setEmail(e.target.value) }} />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="textarea" placeholder="Enter your Address" onChange={(e) => { setAddress(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="7">
                <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength="10" onChange={(e) => { setMnumber(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Grade
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter your Grade" onChange={(e) => { setGrade(e.target.value) }} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                User Name
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter your UserName" onChange={(e) => { setUserName(e.target.value) }} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value) }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Subjects
              </Form.Label>
              <Col sm="7">


                <FormControlLabel
                  label="Sinhala"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('Sinhala') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Sinhala"
                />


                <FormControlLabel
                  label="Science"
                  control={<Checkbox  checked={
                    subjects.lastIndexOf('Science') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Science"
                />

                <FormControlLabel
                  label="Mathematics"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('Mathematics') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Mathematics"
                />

              </Col>
            </Form.Group>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" >
              Create Student
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