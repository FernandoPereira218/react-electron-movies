import React from "react";
import { useNavigate } from "react-router-dom";

import "./Movie.css";
const Movie = ({ objects }) => {
  //const history = useNavigate();
  const handleMovieDetailsClick = (movieId) => {
    //history(`/${movieId}`);
    console.log("Nome: " + movieId);
  };
  return (
    <>
      {objects.map((object) => (
        <div className="container-box">
          <div>
            <img
              className="image-container"
              src={
                "https://www.themoviedb.org/t/p/original" + object.poster_path
              }
              onClick={() => handleMovieDetailsClick(object.id)}
            ></img>
            <p key={object.id} className="image-title">
              {object.title}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movie;
