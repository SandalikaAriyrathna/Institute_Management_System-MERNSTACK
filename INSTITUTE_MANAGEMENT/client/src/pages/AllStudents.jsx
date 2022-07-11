import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../components/admin/Sidenav'

export default function AllStudents(props) {
    const [students, setStudent] = useState([]);

    useEffect(()=>{
        const fetchstudents = async ()=>{
            const res  =await axios.get("/students")
            setStudent(res.data)
            
        }
        fetchstudents()
    },[])
    

    return (
        <div>
            <Sidenav />
            <br /><br />

            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-8 d-flex">
                    {students.map((std, key) => (
                        <div class="card" style={{ width: "14rem", height: "15rem" }}>
                            <div class="card-img-top">
                                {std.profile_pic}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{std.student_id}</h5>
                                <p class="card-text">{std.name}</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            </div>

            )
}
