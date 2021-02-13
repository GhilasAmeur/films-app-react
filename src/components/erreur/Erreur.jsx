import React from "react";
import Navbar from "../accueil/Navbar";
import Footer from "../accueil/Footer";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-dark text-white div-form ">
        <h2 className="p-2">Popular Titles</h2>

        <div className="div-form div-form1"></div>
      </div>

      <div className="container" style={{ height: 340 }}>
        {" "}
        <h3 className="text-center p-3"> Oops</h3>
        <h4 className="text-center">
          {" "}
          The page you were looking for doesn't exist
        </h4>
        <Link to="/">
          <p className="text-center p-5 ">Take me back to the home page </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
