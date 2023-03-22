import React from "react";
import { API_IMAGE } from "../config";

const Card = ({ movie }) => {

  console.log(movie);

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-")
    return [dd, mm, yy].join("/")
  }

  return (
    <div className="card">
      <img
        src={
          movie.poster_path ? API_IMAGE + movie.poster_path : "./img/poster.jpg"
        }
        alt=""
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
      <h5>Sortie le : {dateFormater(movie.release_date)}</h5>  
     ): null}
     <h4>{movie.vote_average}/10 <span>⭐</span></h4>
    </div>
  );
};

export default Card;
