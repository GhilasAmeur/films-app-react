import React, { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <div className="container-fluid bg-primary text-white">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-4 col-md-6 col-lg-6 ">
              <h1 className="p-2">DEMO Streaming</h1>
            </div>
            <div className="col-4  col-md-3 col-lg-3 text-right">
              <h5 className="">Login in</h5>
            </div>
            <div className="col-4  col-md-3 col-lg-3 ">
              <span className="bg-dark p-2 ">Start your free trial</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
