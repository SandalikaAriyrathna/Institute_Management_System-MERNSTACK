import React from 'react'

export default function TeacherSidenav() {
    return (
        <div>
            <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

               
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div className="navbar-nav col-md-10">

                        <a href="index.html" className="nav-item dash-link nav-link "> Dashboard </a>
                        <a href="#" className="nav-item nav-link dash-link "> Personal </a>
                        <a href="#" className="nav-item nav-link dash-link"> Salary Payment History </a>
                        <a href="/teacher" className="nav-item nav-link dash-link"> Timetable <span className="sr-only">(current)</span> </a>

                    </div>


                </div>

            </nav>
            <div className="container-fluid">


                <div className="row">
                    <div className="col-md-3">
                        {/* <h1 className="fredoka"> Hello Jhon ! </h1> */}
                    </div>
                    <div className="col-md-7">
                        <br />
                        <h1 className="fredoka"> Hello John ! </h1>
                    </div>
                    <div className="col-md-2 " >
                        <br />
                        <i className="fa fa-bell icon-dash d-inline mr-4 yellow">  </i>
                        <a href="#" className="btn btn-dash d-inline "> <i className="fa fa-user d-inline white icon-dash" style={{ fontsize: '15px' }}>  </i> <span style={{ color: "white" }}>Log out</span></a>
                    </div>

                </div>
            </div>

        </div>
    )
}
