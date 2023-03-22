import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_MOVIE_URL, API_SEARCH_MOVIE } from "../config";
import Card from "./Card";

const Search = () => {
  const [moviesData, setMoviesData] = useState();
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState("badToGood");

  const PUBLIC_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        API_MOVIE_URL +
          `/search/movie?api_key=${PUBLIC_KEY}&query=${search}&language=fr-FR`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
            Top <span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
            Flop <span>➜</span>
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData &&
          moviesData
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => <Card movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Search;
