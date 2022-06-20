import { useState } from "react";
import React from "react";

function MovieAdd({ movies, setMovies }) {
  
  const [form, setForm] = useState({
    title: "",
    description: "",
    rating: "",
    posterURL: "",
  });

 

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };


  const addMovie = () => {
    setMovies([form, ...movies]);
  };


  return (
    <div>
      <h2>addMovie </h2>
      <form>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={onChange}
        />{" "}
        <br></br>
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={onChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="rating"
          name="rating"
          onChange={onChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="posterURL"
          name="posterURL"
          onChange={onChange}
        />
        <br></br>
        <button type="button" onClick={addMovie}>
          Save
        </button>
      </form>
    </div>
  );
}

export default MovieAdd;
