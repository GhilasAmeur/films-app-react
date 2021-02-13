import React from "react";
import data from "../../feed/sample.json";
import Footer from "../accueil/Footer";
import Navbar from "../accueil/Navbar";
import { Fragment } from "react";
import Form from "../accueil/Form";

function Series() {
  const handlSentSearch = (newEntrie) => {
    console.log("okkkkkkkkkkkkkkkkk");
  };
  const series21 = data.entries
    .filter((serie) => serie.programType === "series")
    .slice(0, 21);

  const series = series21.map((serie, index) => (
    <div key={index} className="card box">
      <img className="card-img-top" src={serie.images["Poster Art"].url} />
      <div className="card-bod">
        <h6 className="card-title">{serie.title}</h6>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Navbar />
      <Form handlSentSearch={handlSentSearch} />
      <div className="hero">{series}</div>
      <Footer />
    </Fragment>
  );
}

export default Series;
