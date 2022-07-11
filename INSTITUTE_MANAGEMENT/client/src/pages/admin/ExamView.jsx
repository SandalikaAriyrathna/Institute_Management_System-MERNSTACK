import React, { useEffect, useState } from 'react'
import Sidenav from '../../components/admin/Sidenav'
import SearchEs from '../../components/admin/SearchEs'
import CanExModal from '../../components/modal/exammodel/CanExModal'
import UpdExModal from '../../components/modal/exammodel/UpdExModal'
import axios from'axios'


export default function ExamView() {
    const[exam_schedules,setexamSchedules] = useState([]);

    useEffect(()=>{
        const fetchexamSchedules = async ()=>{
            const res  =await axios.get("/exam_schedules")
            setexamSchedules(res.data)
        }
        fetchexamSchedules()
    },[])
    return (
        <div>
            <Sidenav />
            <br />
            <SearchEs/>
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Grade</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exam_schedules.map((es,key)=>(
                            <tr>
                                <th scope="row">{es.grade}</th>
                                <td>{es.subject}</td>
                                <td>{es.date}</td>
                                <td>{es.time}</td>
                                <td className="text-center">
                                    <UpdExModal />
                                    <CanExModal canex={es.eScheduleID}/>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
        </div>
    )
}
