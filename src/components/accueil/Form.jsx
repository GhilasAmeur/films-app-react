import React from "react";
import "../../css/index.css";
import { useState } from "react";

function Form({ handlSentSearch }) {
  const [search, setSearch] = useState("");

  const handlChange = (e) => {
    setSearch(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handlSentSearch(search);
    setSearch("");
  };

  return (
    <div className="container-fluid bg-dark text-white div-form ">
      <h2 className="p-2">Popular Titles</h2>

      <div className="div-form div-form1">
        <form className="d-flex p-3" onSubmit={handlSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handlChange}
          />
          <button className="btn btn-outline-success mx-2 " type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
