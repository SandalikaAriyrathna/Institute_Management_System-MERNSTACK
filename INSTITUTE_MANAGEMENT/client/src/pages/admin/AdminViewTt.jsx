import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import SelectDay from '../../components/SelectDay'
import SelectGrade from '../../components/SelectGrade'
import UpdateModal from '../../components/modal/timetablemodal/UpdateModal'
import CancelModal from '../../components/modal/timetablemodal/CancelModal'
import "../../style.css"

export default function AdminViewTt() {
  return (
    <div>
    <Sidenav/>
    <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">

          <SelectGrade />
        </div>

        <div className="col-sm-7">
          <SelectDay />
<br/><br/>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Subject</th>
                <th scope="col">Teacher</th>
                <th scope="col">Hall No.</th>
                <th scope="col">Webinar Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">08:30AM-10:30AM</th>
                <td>Art</td>
                <td>Mr.Anuradha</td>
                <td>ISM01</td>
                <td>www.zoom.us</td>
                <td><UpdateModal/>&nbsp;&nbsp;<CancelModal/></td>
              </tr>
              <tr>
                <th scope="row">10:30AM-12:30PM</th>
                <td>Art</td>
                <td>Mr.Anuradha</td>
                <td>ISM01</td>
                <td>www.zoom.us</td>
                <td><UpdateModal/>&nbsp;&nbsp;<CancelModal/></td>
              </tr>
              <tr>
                <th scope="row">01:30PM-03:30PM</th>
                <td>Art</td>
                <td>Mr.Anuradha</td>
                <td>ISM01</td>
                <td>www.zoom.us</td>
                <td><UpdateModal/>&nbsp;&nbsp;<CancelModal/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
