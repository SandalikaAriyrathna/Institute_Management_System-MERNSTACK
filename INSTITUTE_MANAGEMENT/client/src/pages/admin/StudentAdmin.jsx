import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import DeleteStdModel from '../../components/modal/studentmodel/DeleteStdModal'
import RegisterStdModel from '../../components/modal/studentmodel/RegisterStdModal'
import UpdateStdModel from '../../components/modal/studentmodel/UpdateStdModal'
import ViewStdModel from '../../components/modal/studentmodel/ViewStdModal'
import "../../style.css"
import { Link } from "react-router-dom"
import Search from '../../components/Search'
import GenerateReport from '../../components/modal/studentmodel/GenerateReport'
import SearchForDelModal from '../../components/modal/studentmodel/SearchForDelModal'
import SearchForUpdModal from '../../components/modal/studentmodel/SearchForUpdModal'


export default function StudentAdmin() {
  return (
    <div>
      <Sidenav />
      <br /><br />
      <div class="row text-center inline">
        <div class="col-md-2"></div>
        <div class="col-md-10 d-flex justify-content-center">
          <RegisterStdModel />
          <SearchForUpdModal/>
          <SearchForDelModal/>
          <Link to="/allstudent" className="btn btn-dashb me-5 d-flex align-items-center justify-content-center">
            View All Students
          </Link>
        </div>

      </div>
        <br />
        <Search />
        <br/>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"><GenerateReport/></div>
          
        </div>
     


    </div>
  )
}
