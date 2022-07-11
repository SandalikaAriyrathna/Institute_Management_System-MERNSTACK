import React from 'react'
import "../style.css"
// import NotificationBar from './NotificationBar';
// import NotifyMe from 'react-notification-timeline';
import BellIcon from 'react-bell-icon';

export default function StudentSidebar() {
  return (
    <div>
            <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div class="navbar-nav col-md-10">
                       
                        <a href="#" class="nav-item dash-link nav-link "> Personal</a>
                       
                        <a href="#" class="nav-item dash-link nav-link "> Personal</a>
                        <a href="#" class="nav-item nav-link dash-link "> Exam Results </a>
                        <a href="#" class="nav-item nav-link dash-link"> Attendence </a>
                        <a href="/studentfeesview" class="nav-item nav-link dash-link"> Fees Payment</a>    <BellIcon width='30' active={true} animate={true} color='yellow' /> 
             
                        {/* <NotifyMe
            // data={data}
            storageKey='notific_key'
            notific_key='timestamp'
            notific_value='update'
            heading='Notification Alerts'
            sortedByKey={false}
            showDate={true}
            size={64}
            color="yellow"
            /> */}
                        <a href="#" class="nav-item nav-link dash-link"> Feedback </a>
                        <a href="#" class="nav-item nav-link dash-link"> View Timetable </a>
                      
                    </div> 
                </div>
            </nav>
        </div>
  )
}
