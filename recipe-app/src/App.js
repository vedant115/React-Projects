import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
require('dotenv').config();

import "./styles.css";

export default function App() {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("paneer");

  useEffect(() => {
    getReceipe();
  }, [searchTerm]);

  const getReceipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          value={search}
          type="text"
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}
