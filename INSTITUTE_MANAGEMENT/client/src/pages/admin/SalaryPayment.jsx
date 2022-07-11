import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddPayment from '../../components/modal/PaymentModal/AddPayment'
import ViewAllPayment from '../../components/modal/PaymentModal/ViewAllPayment'
import GenerateReport from '../../components/modal/PaymentModal/GenerateReport'
import SearchUpdatePayment from '../../components/modal/PaymentModal/SearchUpdatePayment'
import SearchDeletePayment from '../../components/modal/PaymentModal/SearchDeletePayment'
import SearchViewPayment from '../../components/modal/PaymentModal/SearchViewPayment'
export default function SalaryPayment() {
    return (
        <div>
            <br></br>
            <br></br>
            <Sidenav />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                
                    <br></br>
                    <br></br>
                    <AddPayment />
                    <SearchUpdatePayment/>
                    <SearchDeletePayment/>
                    <SearchViewPayment/>

                    <br></br>
                    <br></br>
                    <ViewAllPayment/>
                    <br></br>
                    <br></br>
                    <GenerateReport/>


                    
                </div>
            </div>
        </div>
    )
}
