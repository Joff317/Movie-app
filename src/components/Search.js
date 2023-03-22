import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_MOVIE_URL, API_SEARCH_MOVIE } from "../config";
import Card from "./Card";

const Search = () => {
  const [moviesData, setMoviesData] = useState();

  const PUBLIC_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        API_MOVIE_URL +
          `/search/movie?api_key=${PUBLIC_KEY}&query=code&language=fr-FR`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
          />
          <input type="submit" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top <span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop <span>➜</span>
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData &&
          moviesData
            .slice(0, 12)
            .map((movie) => <Card movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Search;
