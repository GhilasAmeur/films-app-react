import React, { Fragment } from "react";
import Navbar from "../accueil/Navbar";
import Footer from "../accueil/Footer";

function Erreur() {
  return (
    <div>
      <Navbar />

      <div className="container" style={{ height: 340 }}>
        {" "}
        <h3 className="text-center p-5">Oups !! cette page n'esxiste pas !</h3>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
