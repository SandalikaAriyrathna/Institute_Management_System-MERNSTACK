import React from 'react'
import TeacherSideNav from "../components/TeacherSideNav";
import "../style.css"
import { Link } from "react-router-dom"

export default function TeacherDashboard() {
  return (
    <div>
      <TeacherSideNav/>
      <br /><br />
      <div class="row text-center inline">
        <div class="col-md-2"></div>
        <div class="col-md-10 d-flex justify-content-center">

        <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-2">
                        <div>
                            <div class="dbox__body">
                                <span class="dbox__count"></span>
                                <span class="dbox__title"> <Link to="/addT" type = "button" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
            Schedule a class
          </Link></span>
                            </div>

                            <div class="dbox__action">
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div >
                            <div class="dbox__body">
                                <span class="dbox__count"></span>
                                <span class="dbox__title"><Link to="/ttT" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
            View Timetable
          </Link></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
        

          
        </div>

      </div>
      
    </div>
  )
}
