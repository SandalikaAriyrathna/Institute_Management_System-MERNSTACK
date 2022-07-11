import React from 'react';
import "../../style.css";
import FeesPaymentTable from './FeesPaymentTable';




export default function AdminViewFees(props) {
 
  return (
    <>


  
   <div>
  
   <div class="container-fluid">


                <div class="row">
               
                  
                        <img src="https://thumbs.dreamstime.com/b/admin-office-binder-wooden-desk-table-colored-pencil-pencils-pen-notebook-paper-79046621.jpg" style={{width: '250px'}} alt="image"/>
               
              
                        <div class="col-md-1">
                        {/* <h1 class="fredoka"> Hello Jhon ! </h1> */}
                    </div>
                    <div class="col-md-7">
                        <br/>
                        <h1 class="fredoka"> Hello Admin ! </h1>
                    </div>
                    <div class="col-md-2 " >
                        <br/>
                        <i class="fa fa-bell icon-dash d-inline mr-4 yellow">  </i>
                        <a href="#" class="btn btn-dash d-inline "> <i class="fa fa-user d-inline white icon-dash" style={{fontsize: '15px'}}>  </i> <span style={{ color: "white" }}>Log out</span></a>
                    </div>

                </div>
            </div> 
   <FeesPaymentTable/> 
   </div>
     
    </>
  )

}