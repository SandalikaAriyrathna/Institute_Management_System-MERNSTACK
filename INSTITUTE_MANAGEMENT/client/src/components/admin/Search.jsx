import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
  return (
     
    <div>
          <div class="row">
            <div class="col-sm-10"></div>
            <div class="col-sm-5"></div>
    <MDBCol md="4">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
    </div>
    </div>
  );
}

export default Search;