import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddFees from '../../components/modal/feesmodal/AddFees'
import { Link } from "react-router-dom";
import SearchPage from '../../components/modal/feesmodal/SearchPage'
import Piechart from '../../components/admin/Piechart';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';
import PhysicalPayPiechart from '../../components/admin/PhysicalPayPieChart';

export default function OnlineFees() {

    const componentRef = useRef();
    const chart = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>


            <br />
            <div className="row text-right inline">
                <Sidenav />

                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <br />
                    <SearchPage />
                </div>
            </div>

            <br />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10 d-flex justify-content-center">

                    <AddFees />

                    <Link to="/adminviewfees" className="btn-dashb text-decoration-none d-flex justify-content-center align-items-center
">                        View All Fees Payments
                    </Link>

                    <Button className='btn-dashb me-5' variant="warning" style={{ marginLeft: "50px" }} onClick={() => chart.current()}>
                        Generate Summary
                    </Button>

                    <Button className='btn-dashb me-5' variant="warning" onClick={handlePrint} style={{ marginLeft: "10px" }}>
                        Print Summary
                    </Button>

                    <button className='btn-dashb me-5' variant="warning" onClick={() => window.location.reload()}>Refresh</button>

                </div>

            </div>

            <br /><br />


            <div ref={componentRef}>
                <div className="container-fluid justify-content-center">
                    <div className="row text-center">
                        {/* <table className='table' style={{width:'50%'}}>
                        <tr>
                            <th>Online Fess Payment</th>
                            <th>Physical Fess Payment</th>
                        </tr>
                        <tr>
                            <th>Summary for this Month</th>
                            <th>Summary for this Month</th>
                        </tr>
                        <tr>
                            <td><Piechart chart={chart} /></td>
                            <td><PhysicalPayPiechart chart={chart} /></td>
                        </tr>
                    </table> */}
                        <div className="col-md-2"></div>
                        <div className="col-md-5 align-items-center justify-content-center">

                            <h2>Online Fess Payment</h2>
                            <h2>Summary for this Month</h2>
                            <br /><br />
                            <div style={{width:'50%', height:'50%', marginLeft:'150px'}}>
                                <Piechart chart={chart} />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h2 >Physical Fess Payment</h2>
                            <h2 >Summary for this Month</h2>
                            <br /><br />
                            <div style={{width:'50%', height:'50%',marginLeft:'150px'}}>
                                <PhysicalPayPiechart chart={chart} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}


