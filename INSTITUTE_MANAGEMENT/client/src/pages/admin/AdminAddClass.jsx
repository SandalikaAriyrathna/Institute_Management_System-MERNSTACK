import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import axios from "axios";
import {useState} from "react";
import "../../style.css";

export default function AdminAddClass() {

  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [hallNo, setHallNo] = useState("");
  const [wLink, setwLink] = useState("");

  function sendData(e) {
    e.preventDefault();
    
    const newClass = {
      grade,
      subject,
      teacher,
      day,
      time,
      hallNo,
      wLink 
    }
 
      axios.post("http://localhost:5000/api/classes/", newClass).then(() => {
        alert("Class Added")
        setGrade("");
        setSubject("");
        setTeacher("");
        setDay("");
        setTime("");
        setHallNo("");
        setwLink("");
    }).catch((err) => {
        alert(err);
    })
  }
  
  return (
    <>
    <div>
      <Sidenav />
      <br />
      <br />
      
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
        <h1>Schedule a class</h1><br /> 
          <form style={{ width: '500px' }} onSubmit={sendData}>
            <div className="mb-3">
              <label for="grade" className="form-label">Grade</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>{setGrade(e.target.value)}} required>
                        
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="Grade 13">Grade 13</option> 
              </select>
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">Subject</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>{setSubject(e.target.value)}} required>
                <option value="Mathematics">Mathematics</option>
                <option value="Buddhism">Buddhism</option>
                <option value="History">History</option>
                <option value="Art">Art</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Geography">Geography</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="teacher" className="form-label">Teacher Name</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>{setTeacher(e.target.value)}} required>
                <option value="Mr. Anuradha">Mr. Anuradha</option>
                <option value="Mr. Amal">Mr. Amal</option>
                <option value="Mrs. Hansi">Mrs. Hansi</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="day" className="form-label">Day of Week</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>{setDay(e.target.value)}} required>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="time" className="form-label">Time</label>
              <input type="time" id="inputTime" className="form-control" placeholder="08.30-10.30" onChange={(e)=>{setTime(e.target.value)}} required/>
            </div>
            <div className="mb-3">
              <label for="hallNo" className="form-label">Hall No.</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>{setHallNo(e.target.value)}} required>
                <option value="IMS01">IMS01</option>
                <option value="IMS02">IMS02</option>
                <option value="IMS03">IMS03</option>
                <option value="IMS04">IMS04</option>
                <option value="IMS05">IMS05</option>
                <option value="IMS06">IMS06</option>
                <option value="IMS07">IMS07</option>
                <option value="IMS08">IMS08</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="webinarLink" className="form-label">Webinar Link</label>
              <input type="text" id="inputLink" className="form-control" placeholder="www.zoom.us" onChange={(e)=>{setwLink(e.target.value)}}/>
            </div>

            <button type="submit" className="btn btn-primary me-3">Add Class</button>

            <button type="submit" className="btn btn-primary">Free Time Slots</button>
            <br/> <br/> <br/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
