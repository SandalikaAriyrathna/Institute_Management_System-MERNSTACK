import React from 'react'
import "../../style.css"
import Header from '../components/Header'
import StudentFeesView from '../components/StudentFeesView'
import StudentSidebar from '../components/StudentSideBar'

export default function StudentfeesviewPage() {
    return (
        <div>
            <Header/> <br/><br/><br/><br/>
          
            <StudentSidebar/>
            <br/><br/>
          
                <div className="container" style={{float:'right'}}>
               
                <div className="container" style={{ width: '85%', background:'#FEF3B3' , padding:'10px 10px 10px 10px'}}> 
               
                <h1 style={{textAlign:'center'}} >Student Payment Details</h1>
                <StudentFeesView/>
                </div>    
                </div>
            </div>
       
    )
}
