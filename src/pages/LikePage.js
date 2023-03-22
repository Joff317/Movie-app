import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { API_MOVIE_FAV, API_MOVIE_URL } from "../config";
import Card from "../components/Card";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  const PUBLIC_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    let moviesId = window.localStorage.movie
      ? window.localStorage.movie.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(API_MOVIE_URL + `/movie/${moviesId[i]}?api_key=` + PUBLIC_KEY)
        .then((res) => setListData((listData) => [...listData, res.data]))
        
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>Coups de Coeur</h2>
      <div className="result">
         {listData.length > 0 ? (
            listData.map((movie) => <Card movie={movie} key={movie.id}/>)
         ) : (
            <h2>Aucun Coup de coeur pour le moment</h2>
         )}
      </div>
    </div>
  );
};

export default LikePage;
