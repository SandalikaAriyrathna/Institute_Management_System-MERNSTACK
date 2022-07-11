import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddExModal from '../../components/modal/exammodel/AddExModal'

export default function ExamAdmin() {
    return (
        <div>
            <Sidenav />
            <br /><br />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10 d-flex justify-content-center">

                    <AddExModal />
                    {/* <button type="button" className="btn-dashb"> */}
                        <Link to="/examview" className="btn btn-dashb d-flex align-items-center">
                            View Exam Schedules
                        </Link><br/><br/>
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
}
