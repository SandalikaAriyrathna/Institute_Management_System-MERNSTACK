import React from 'react'
import Sidenav from '../components/admin/Sidenav'



export default function AllStaff() {
  return (
    <div>
      <div>      
            <Sidenav/>
            <br/><br/>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-8">
                    <div class="card" style={{ width: "14rem", height:"15rem" }}>
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Saman</h5>
                            <p class="card-text">IT45438735</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
