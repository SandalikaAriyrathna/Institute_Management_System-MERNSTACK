import React from 'react'
import "../../style.css"

export default function ReceptionistSideMenu() {
  return (
    <div>
            <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div class="navbar-nav col-md-10">

                        <a href="#" class="nav-item dash-link nav-link "> Personal <span class="sr-only">(current)</span> </a>
                        <a href="#" class="nav-item nav-link dash-link"> Personal </a>
                        <a href="#" class="nav-item nav-link dash-link"> Salary Payment History</a>
                        <a href="/physicalfees" class="nav-item nav-link dash-link"> Add Fees Payment </a>
                    </div> 
                </div>
            </nav>
        </div>
  )
}