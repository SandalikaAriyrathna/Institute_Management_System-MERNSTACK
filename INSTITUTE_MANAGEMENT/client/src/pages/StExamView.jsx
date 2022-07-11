import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchEs from '../components/admin/SearchEs'
import axios from 'axios'
import Footer from '../components/Footer';


export default function StExamView() {
    const [exam_schedules, setexamSchedules] = useState([]);
    // console.log(exam_schedules)
    const {user}=true

    useEffect(() => {
        axios.get('/exam_schedules').then(res => {
            setexamSchedules(res.data);

        })
            .catch(err => {
                console.log(err);
                alert("Error");
            })
    })


    return (
        <div>
            <Header />
            <br/><br/><br/><br/><br/><br/>
            <SearchEs/>
            {/* <SearchEs /> */}
            <br />
            <div className="row text-center justify-content-center">
                {/* <div className="col-md-3"></div> */}
                {/* <div className="col-md-8"> */}
                <table className="table "  style={{width : '70%'}}>
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


                {/* </div> */}
            </div>
            <div className='float-none'>
                <Footer />
            </div>
        </div>

    )
}
