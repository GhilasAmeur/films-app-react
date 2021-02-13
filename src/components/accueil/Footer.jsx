import React from "react";
import platStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";
import appStore from "../../assets/store/app-store.svg";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row p-3 text-white">
          <h6 className=" font-weight-lighter m-2">HOME |</h6>

          <h5 className="font-weight-lighter m-2">Terms and Conditions |</h5>

          <h5 className=" font-weight-lighter m-2">Privacy Policy |</h5>

          <h5 className=" font-weight-lighter m-2">Collection Statement |</h5>

          <h5 className="font-weight-lighter m-2">Help |</h5>

          <h5 className=" font-weight-lighter m-2">Manage Account</h5>
        </div>
      </div>

      <div className=" container text-white ">
        <h6 className=" font-weight-lighter ">
          Copyright 2021 &copy; - Demo Streaming. All Rights Reserved.
        </h6>
      </div>
      <div className="container p-5">
        <div className="row align-items-center">
          <a href="#">
            <i className="fab fa-facebook fa-2x text-primary mx-3"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-2x text-info mx-3"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x text-danger mx-3 "></i>
          </a>
          <div className="col-md-2 offset-3">
            <img src={platStore} alt="playSore" />
          </div>
          <div className="col-md-2">
            <img src={windowsStore} alt="playSore" />
          </div>
          <div className="col-md-2">
            <img src={appStore} alt="playSore" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
