import React, { useState, useEffect, Fragment } from "react";
import data from "../../feed/sample.json";
import "../../css/index.css";
import Navbar from "../accueil/Navbar";
import Footer from "../accueil/Footer";

function Description({ match }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const title = match.params.id;
    const filmDescription = data.entries.filter((film) => film.title == title);
    setFilms(filmDescription);
  }, []);

  // console.log(match.params.id);
  return (
    <Fragment>
      <Navbar />
      <div className=" container hero p-2 ">
        {films.map((film, index) => (
          <div class="row">
            <div key={index} className=" card  col-md-2  align-self-start">
              <img className="" src={film.images["Poster Art"].url} />
              <div className="card-bod">
                <h6 className="card-title">{film.title}</h6>
              </div>
            </div>
            <div className=" col justify-content-end">
              <h3>Titre</h3>
              <p> {film.title}</p>
              <h3>Description </h3> <p>{film.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </Fragment>
  );
}

export default Description;
