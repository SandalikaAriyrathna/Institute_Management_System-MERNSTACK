import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default function SearchExamModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [exam_schedules, setexamSchedules] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:5000/api/exam_schedules/gres/" + props.exam_schedules).then(response => {
            console.log(response.data);
            if (response.data.length != 0) {
                setexamSchedules(response.data);
            }
            else{
                swal({ text: "No exams for this grade", button: "Okay!"}).then((value) => {
                    window.location = '/stexam'; 
                 });
            }

        })
            .catch(err => {
                console.log(err);
            })

    })



    return (
        <>
            <Modal.Header>
                <div class="col-md-12 text-center">
                    <Modal.Title id="contained-modal-title-vcenter">Search Exam Schedule</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>



                <Form>
                    <fieldset>
                        <div>
                            {/* <input placeholder="Search" /> */}
                            <center><h2>Search Details</h2></center>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Grade</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        exam_schedules.map(exam_schedules => <tr key={exam_schedules.eScheduleID} >
                                            <td >{exam_schedules.grade}</td>
                                            <td >{exam_schedules.subject}</td>
                                            <td >{exam_schedules.date}</td>
                                            <td >{exam_schedules.time}</td>
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </Form>

            </Modal.Body>

        </>
    );
}
