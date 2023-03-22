import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import { API_KEY_MOVIE } from "../config";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <Search />
    </div>
  );
};

export default Home;
