import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import SearchReport from '../../admin/SearchReport';

export default function ReportModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exam_schedules, setexamSchedules] = useState([]);

    useEffect(() => {
        axios.get('/exam_schedules').then(res => {
            setexamSchedules(res.data);

        })
            .catch(err => {
                console.log(err);
            })
    })

    return (
        <>

            <Button className='btn btn-dashbc' style={{width:"26.5%"}} onClick={handleShow}>
                Generate Report
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>

                </Modal.Header>


                <Form>
                    <Modal.Body>

                        <SearchReport />
                        <br />
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
                                {exam_schedules.map(es => (
                                    <tr key={es.eScheduleID}>
                                        <td>{es.grade}</td>
                                        <td>{es.subject}</td>
                                        <td>{es.date}</td>
                                        <td>{es.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>

                    </Modal.Footer>

                </Form>
            </Modal>

        </>
    )
}
