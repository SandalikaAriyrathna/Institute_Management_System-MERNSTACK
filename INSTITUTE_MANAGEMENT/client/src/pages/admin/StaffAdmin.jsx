import React from 'react'

import { Link } from "react-router-dom"
import Search from '../../components/admin/Search'
import Sidenav from '../../components/admin/Sidenav'
import DeleteModel from '../../components/modal/staffmodal/DeleteModel'
import GenerateReport from '../../components/modal/staffmodal/GenerateReport'
import RegisterModel from '../../components/modal/staffmodal/RegisterModel'
import UpdateModel from '../../components/modal/staffmodal/UpdateModel'


export default function StaffAdmin() {
  return (
    <div>
      <Sidenav/>
      <br /><br />
      <div class="row text-center inline">
        <div class="col-md-2"></div>
        <div class="col-md-10 d-flex justify-content-center">
          <RegisterModel/>
          <UpdateModel/>
          <DeleteModel/>
          <Link to="/allstaff" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
            View Staff
          </Link>
        </div>
    
      <div>
        <br/>
      <Search/>
        <br/>
      </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"><GenerateReport/></div>
          
        </div>

      </div>

    </div>
  )
}