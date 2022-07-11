import React from 'react';
import Header from './Header';
import StudentFeesFormView from './StudentFeesFormView';
import StudentSidebar from './StudentSidebar';

export default function StudentFeesView() {


  return (
    <div>
        
     <div classname="col">
     <Header/>
       </div>   
   <div>
   <StudentSidebar/> 
   </div>
  
    <div id='123' style={{margin: '90px 20px 90px 260px'}}>
               <StudentFeesFormView/>
               
               </div>
    </div>

  )
}