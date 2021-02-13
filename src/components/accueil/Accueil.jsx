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
        <Link
          to="/films"
          className="div-film"
          style={{ textDecoration: "none" }}
        >
          <p className="">MOVIES</p>

          <img clssName="img-responsive" src={im} alt="img" />
          <h6 className="font-weight-lighter p-2">Popular Movies</h6>
        </Link>

        <Link
          to="/series"
          className="div-film"
          style={{ textDecoration: "none" }}
        >
          <p className="">SERIES</p>

          <img
            clssName=""
            src={im}
            // style={{ backgroundColor: "red" }}
            alt="img"
          />
          <h6 className="font-weight-lighter p-2">Popular Movies</h6>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Accueil;
