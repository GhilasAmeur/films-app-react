import React, { Fragment } from "react";
import data from "../../feed/sample.json";
import "../../css/index.css";
import Navbar from "../accueil/Navbar";
import Footer from "../accueil/Footer";
import Form from "../accueil/Form";
import { useState, useEffect } from "react";
import Erreur from "../erreur/Erreur";

function Films() {
  const [films, setFilms] = useState([]);

  const [error, SetError] = useState(false);

  useEffect(() => {
    console.log("useeffect");
    const myMovies = data.entries.filter((film) => {
      return film.programType == "movie";
    });

    const my21Movies = myMovies.slice(0, 21);
    setFilms(my21Movies);
  }, []);

  const handlSentSearch = (newEntrie) => {
    if (newEntrie == 2010) {
      const movies2010 = data.entries.filter(
        (movie) =>
          movie.programType == "movie" && movie.releaseYear == newEntrie
      );
      setFilms(movies2010);
      console.log(movies2010);
    } else if (newEntrie !== "") {
      const str = newEntrie.substr(0, 1);

      const moviesSort = data.entries.filter(
        (movie) => movie.title.toLowerCase().substr(0, 1) == str
      );
      //console.log(moviesSort.length);
      if (moviesSort.length !== 0) {
        const mesFilmsTriee = moviesSort.sort((a, b) => {
          const aMinuscule = a.title.toLowerCase();
          const bMinuscule = b.title.toLowerCase();

          if (aMinuscule < bMinuscule) {
            return -1;
          }
          if (aMinuscule > bMinuscule) {
            return 1;
          }
          if (aMinuscule === bMinuscule) {
            return 0;
          }
        });

        setFilms(mesFilmsTriee);
      } else {
        SetError(true);
      }
    } else {
      console.log("faut saisir klk chose !!!!");
      SetError(true);
    }
  };

  return error ? (
    <Erreur />
  ) : (
    <Fragment>
      <Navbar />
      <Form handlSentSearch={handlSentSearch} />
      <div className="hero">
        {films.map((film, index) => (
          <div key={index} className="card box">
            <img className="card-img-top" src={film.images["Poster Art"].url} />
            <div className="card-bod">
              <h6 className="card-title">{film.title}</h6>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </Fragment>
  );
}

export default Films;
