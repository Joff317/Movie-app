import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import { API_KEY_MOVIE } from "../config";

const Home = () => {
//   const [movie, setMovie] = useState();

//   const PUBLIC_KEY = process.env.REACT_APP_API_KEY;

//   useEffect(() => {
//     axios.get(API_KEY_MOVIE + PUBLIC_KEY).then((res) => {
//       setMovie(res.data.results);
//       console.log(res.data.results);
//     });
//   }, []);

  return (
    <div className="home-page">
      <Header />
      
      <Search/>
     
    </div>
  );
};

export default Home;
