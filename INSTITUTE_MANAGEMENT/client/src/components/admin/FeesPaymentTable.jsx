import React from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios";
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import UpdateFees from '../modal/feesmodal/UpdateFees';
import DeleteFees from '../modal/feesmodal/DeleteFees';
import PhysicalUpdateFees from '../modal/feesmodal/PhysicalUpdateFees';
import PhysicalDeleteFees from '../modal/feesmodal/PhysicalDeleteFees';
// import { FeesTable } from './TableView';



export default function FeesPaymentTable() {

  const [Sub, setSub] = useState('')
  const [Grade, setGrade] = useState('')
  const [OnlineFeeses, setOnlineFeeses] = useState([])
  const [PhysicalFeeses, setPhysicalFeeses] = useState([])

//   function asd(a){
//     axios.get("http://localhost:5000/api/OnlineFeeses/${a}")

//     .then(res => {   
//       setOnlineFeeses(res.data);
        
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

  useEffect(() => {
      if(Sub == '' && Grade == ''){
        axios.get("http://localhost:5000/api/OnlineFeeses/")

        .then(res => {   
          setOnlineFeeses(res.data);
            
        })
        .catch(err => {
          console.log(err);
        })
      }else{
        axios.get(`http://localhost:5000/api/OnlineFeeses/${Sub}/${Grade}`)

        .then(res => {   
          setOnlineFeeses(res.data);
            
        })
        .catch(err => {
          console.log(err);
        })
      }
    

  }, [Sub])

  useEffect(() => {
    if(Sub == '' && Grade == ''){
      axios.get("http://localhost:5000/api/PhysicalFeeses/")

      .then(res => {   
        setPhysicalFeeses(res.data);
          
      })
      .catch(err => {
        console.log(err);
      })
    }else{
      axios.get(`http://localhost:5000/api/PhysicalFeeses/${Sub}/${Grade}`)

      .then(res => {   
        setPhysicalFeeses(res.data);
          
      })
      .catch(err => {
        console.log(err);
      })
    }
  

}, [Sub])

  useEffect(() => {
    axios.get("http://localhost:5000/api/PhysicalFeeses/")
    .then(res => {   
      setPhysicalFeeses(res.data);
    })
    .catch(err => {
      console.log(err);
    })

  }, [])


   
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: ()=> componentRef.current,
  });




  return (
    <>
     
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{background:'linear-gradient(to right, #74ebd5, #acb6e5)'}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 fw-bolder min-vh-100">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                   
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 06')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 06</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 07')} class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 07</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                        <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 08')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 08</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>

                        <li>
                        <a href="#submenu4" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 09')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 09</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                            <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu5" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 10')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 10</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                            <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu6" data-bs-toggle="collapse" onClick={()=>setGrade('Grade 11')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">Grade 11</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu6" data-bs-parent="#menu">
                            <li class="w-100">
                                <a class="nav-link px-0" onClick={()=>setSub('Mathematics')}> <span class="d-none d-sm-inline">Mathematics</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('Sinhala')}> <span class="d-none d-sm-inline">Sinhala</span></a>
                            </li>
                            <li>
                                <a class="nav-link px-0" onClick={()=>setSub('English')}> <span class="d-none d-sm-inline">English</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Science')}> <span class="d-none d-sm-inline">Science</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('History')}> <span class="d-none d-sm-inline">History</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Music')}> <span class="d-none d-sm-inline">Music</span></a>
                            </li>
                            <li>
                                <a  class="nav-link px-0" onClick={()=>setSub('Business Studies')}> <span class="d-none d-sm-inline">Business Studies</span></a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu7" data-bs-toggle="collapse" onClick={()=>setGrade('A\L')} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark fw-bolder">A/L</span> </a>
                            <ul class="collapse nav flex-column ms-1 text-white fw-bolder" id="submenu7" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Maths')}> <span class="d-none d-sm-inline">Maths</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Physics')}> <span class="d-none d-sm-inline">Physics</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Chemistry')}> <span class="d-none d-sm-inline">Chemistry</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Biology')}> <span class="d-none d-sm-inline">Biology</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Arts')}> <span class="d-none d-sm-inline">Arts</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('IT')}> <span class="d-none d-sm-inline">IT</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Accounting')}> <span class="d-none d-sm-inline">Accounting</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Business')}> <span class="d-none d-sm-inline">Business</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0" onClick={()=>setSub('Econ')}> <span class="d-none d-sm-inline">Econ</span></a>
                            </li>
                        </ul>
                    </li>

                    
                </ul>

                <hr></hr>
                
            </div>
        </div>
        <div class="col py-3">
        <UpdateFees/> <DeleteFees/><br />
        <button onClick={handlePrint} type="button" class="btn btn-primary btn-sm-4 float-end" style={{height:"50px", width:"10%", float: 'right' }}>
                  Print Report
              </button>
              <div ref = {componentRef}>  
   
        <h1  class="row" style={{textAlign:'center'}}>Online Fees Payment List</h1><br /><br />
        <div class="float-end" >
        
        </div>
      
    <br />
            <Table striped bordered hover variant="dark ">
           
   <thead>
    <tr>
      
      <th><span>Payment ID</span> </th>
      <th><span>Student ID</span> </th>
      <th><span>Name</span> </th>
      <th><span>Subject</span> </th>
      <th><span>Grade</span> </th>
      <th><span>Monthly Fee</span> </th>
      
      <th><span>
  <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
  <option selected style={{background:'transparent', color:'black'}}>Teacher's Name</option>
        <option value="miss Mokshi" style={{background:'transparent', color:'black'}}>miss Mokshi</option>
        <option value="miss Ariyarathna" style={{background:'transparent', color:'black'}}>miss Ariyarathna</option>
        <option value="miss Milantha" style={{background:'transparent', color:'black'}}>miss Milantha</option>
        <option value="miss Sandalika" style={{background:'transparent', color:'black'}}>miss Sandalika</option>
        <option value="miss Sudharma" style={{background:'transparent', color:'black'}}>miss Sudharma</option>
        <option value="mr. Kaveen" style={{background:'transparent', color:'black'}}>mr. Kaveen</option>
       </select></span> 
        </th>

        <th><span> 
        <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
          <option selected style={{background:'transparent', color:'black'}}>Month</option>
          <option value="January" style={{background:'transparent', color:'black'}}>January</option>
          <option value="February" style={{background:'transparent', color:'black'}}>February</option>
          <option value="March" style={{background:'transparent', color:'black'}}>March</option>
          <option value="April" style={{background:'transparent', color:'black'}}>April</option>
          <option value="May" style={{background:'transparent', color:'black'}}>May</option>
          <option value="June" style={{background:'transparent', color:'black'}}>June</option>
          <option value="July" style={{background:'transparent', color:'black'}}>July</option>
          <option value="August" style={{background:'transparent', color:'black'}}>August</option>
          <option value="September" style={{background:'transparent', color:'black'}}>September</option>
          <option value="October" style={{background:'transparent', color:'black'}}>October</option>
          <option value="November" style={{background:'transparent', color:'black'}}>November</option>
          <option value="December" style={{background:'transparent', color:'black'}}>December</option>
        </select></span> 
        </th>
      
       
        {/* <th><span>
  <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
    <option selected style={{background:'transparent', color:'black'}}>Payment Type</option>
    <option value="Paid" style={{background:'transparent', color:'black'}}>Paid</option>
    <option value="Unpaid" style={{background:'transparent', color:'black'}}>Unpaid</option>

  </select></span> 
        </th> */}
        </tr>
  </thead>

  <tbody> { OnlineFeeses.map(cs =>
              <tr key={cs.payment_id}>
                 <td>{cs.payment_id}</td>
                <td>{cs.student_id}</td>
                <td>{cs.name}</td>
                <td>{cs.subjects}</td>
                <td>{cs.grade}</td>
                <td>{cs.monthly_fee}</td>
                <td>{cs.teachers_name}</td>
                <td>{cs.month}</td>
                {/* <UpdateFees payment_id={cs.payment_id} student_id={cs.student_id} name={cs.name} subjects={cs.subjects} grade={cs.grade} monthly_fee= {cs.monthly_fee} teachers_name= {cs.teachers_name} month= {cs.month}/>
                        <DeleteFees dpayment_id={cs.payment_id} dstudent_id={cs.student_id} dname={cs.name} dsubjects={cs.subjects} dgrade={cs.grade} dmonthly_fee= {cs.monthly_fee} dteachers_name= {cs.teachers_name} dmonth= {cs.month}/>
                   */}
               
               
              
               </tr>)
              }
  </tbody>
</Table>
</div>
                
     <br /><br />
     <div class="col py-3">
     <PhysicalUpdateFees/><PhysicalDeleteFees/> <br />
        <button onClick={handlePrint} type="button" class="btn btn-primary btn-sm-4 float-end" style={{height:"50px", width:"10%", float: 'right' }}>
                  Print Report
              </button>
              <div ref = {componentRef}>  
             
            <h1  class="row" style={{textAlign:'center'}}>Physical Fees Payment List</h1><br /><br />
<div class="float-end" >

</div>
           
 
                <Table striped bordered hover variant="dark">
    
       <thead>
        <tr>
          
          <th><span>Payment ID</span> </th>
          <th><span>Student_ID</span> </th>
          <th><span>Name</span> </th>
          <th><span>Subject</span> </th>
          <th><span>Grade</span> </th>
          <th><span>Monthly Fee</span> </th>
         
          <th><span>
      <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
        <option selected style={{background:'transparent', color:'black'}}>Teacher's Name</option>
        <option value="miss Mokshi" style={{background:'transparent', color:'black'}}>miss Mokshi</option>
        <option value="miss Ariyarathna" style={{background:'transparent', color:'black'}}>miss Ariyarathna</option>
        <option value="miss Milantha" style={{background:'transparent', color:'black'}}>miss Milantha</option>
        <option value="miss Sandalika" style={{background:'transparent', color:'black'}}>miss Sandalika</option>
        <option value="miss Sudharma" style={{background:'transparent', color:'black'}}>miss Sudharma</option>
        <option value="mr. Kaveen" style={{background:'transparent', color:'black'}}>mr. Kaveen</option>
      </select></span> 
            </th>
    
            <th><span> 
            <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
              <option selected style={{background:'transparent', color:'black'}}>Month</option>
              <option value="January" style={{background:'transparent', color:'black'}}>January</option>
              <option value="February" style={{background:'transparent', color:'black'}}>February</option>
              <option value="March" style={{background:'transparent', color:'black'}}>March</option>
              <option value="April" style={{background:'transparent', color:'black'}}>April</option>
              <option value="May" style={{background:'transparent', color:'black'}}>May</option>
              <option value="June" style={{background:'transparent', color:'black'}}>June</option>
              <option value="July" style={{background:'transparent', color:'black'}}>July</option>
              <option value="August" style={{background:'transparent', color:'black'}}>August</option>
              <option value="September" style={{background:'transparent', color:'black'}}>September</option>
              <option value="October" style={{background:'transparent', color:'black'}}>October</option>
              <option value="November" style={{background:'transparent', color:'black'}}>November</option>
              <option value="December" style={{background:'transparent', color:'black'}}>December</option>
            </select></span> 
            </th>
           

            {/* <th><span>
      <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
        <option selected style={{background:'transparent', color:'black'}}>Payment Type</option>
        <option value="Paid" style={{background:'transparent', color:'black'}}>Paid</option>
        <option value="Unpaid" style={{background:'transparent', color:'black'}}>Unpaid</option>
    
      </select></span> 
            </th> */}

            </tr>
      </thead>
    
      <tbody> { PhysicalFeeses.map(cs =>
                  <tr key={cs.payment_id}>
                     <td>{cs.payment_id}</td>
                    <td>{cs.student_id}</td>
                    <td>{cs.name}</td>
                    <td>{cs.subjects}</td>
                    <td>{cs.grade}</td>
                    <td>{cs.monthly_fee}</td>
                    <td>{cs.teachers_name}</td>
                    <td>{cs.month}</td>
                   </tr>)
                  }
      </tbody>
    </Table>
</div>
   {/* <FeesTable/> */}
   

</div>
</div>
</div>  
</div>
</>
  )
}