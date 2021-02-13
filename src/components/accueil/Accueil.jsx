import React, { Fragment } from "react";

import im from "../../assets/placeholder.png";
import "../../css/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Form from "./Form";

function Accueil() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid bg-dark text-white div-form ">
        <h2 className="p-2">Popular Titles</h2>

        <div className="div-form div-form1"></div>
      </div>

      <div className=" container conta  text-align-center justify-content-center">
        <div className="div-film ">
          SERIES
          <img clssName=" " src={im} alt="img" />
          <h6 className="font-weight-lighter p-4">Popular Series</h6>
        </div>

        <div className="div-film">
          <Link className="f" to="/films">
            MOVIES
          </Link>
          <img clssName=" " src={im} alt="img" />
          <h6 className="font-weight-lighter p-4">Popular Movies</h6>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Accueil;
