import React from 'react'
import "../../style.css"
import PhysicalPayment from '../../components/admin/PhysicalPayment';
import ReceptionistSideMenu from '../../components/admin/ReceptionistSideMenu';
import Header from '../../components/Header';
import PhysicalUpdateFees from '../../components/modal/feesmodal/PhysicalUpdateFees'
import PhysicalDeleteFees from '../../components/modal/feesmodal/PhysicalDeleteFees';
import SearchPage from '../../components/modal/feesmodal/SearchPage';
import { Link } from "react-router-dom";

export default function PhysicalFees() {
    return (
        <div>
            <Header/>
           
            <ReceptionistSideMenu/>
            <br/><br/>
            <br/><br/>
           

              

           <br />
                <div className="container" style={{float:'right'}}>
               
                <div className="container" style={{ width: '75%', background:'#FEF3B3' , padding:'10px 10px 10px 10px', marginBottom:'50px'}}> 
                <div className="col-md-12 ">
                <div>
            
            <SearchPage/>
          </div>
                    </div>
                    <PhysicalUpdateFees/>
                    <PhysicalDeleteFees/><br /><br />
                    <Link to="/adminviewfees" className="btn-dashb text-decoration-none d-flex justify-content-center align-items-center" variant="warning" style={{height:'80px'}}>    
                                        View All Fees Payments
                    </Link>
                    <div>
                    <PhysicalPayment/>
                    </div>
     
              
                </div>    
                </div>
            </div>
       
    )
}
