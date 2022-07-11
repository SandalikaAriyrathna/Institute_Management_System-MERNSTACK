import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
  return (
     
    <div>
          <div className="row">
            <div className="col-sm-9"></div>
            <div className="col-sm-4"></div>
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

export default Search