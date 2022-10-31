import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Heading, SearchBar, MovieList, AddFavorites, RemoveFavorites } from "./comps/index";

import "./styles.css";
require('dotenv').config();

export default function App() {
  const APP_KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const movieFav = JSON.parse(
      localStorage.getItem("react-movie-app-fav-list")
    );
    movieFav && setFavorites(movieFav);
  }, []);


  const getMovies = async (searchTerm) => {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${APP_KEY}`;
    const res = await fetch(URL);
    const data = await res.json();

    data.Search && setMovies(data.Search);
  };


  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-fav-list", JSON.stringify(items));
  };

  const handleFavClick = (movie) => {
    const newfavMovies = [...favorites, movie];

    setFavorites(newfavMovies);
    saveToLocalStorage(newfavMovies);
  };

  const handleRemoveFavClick = (movie) => {
    const newFavList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavList);
    saveToLocalStorage(newFavList);
  };

  
  return (
    <>
      {/* Movies container */}
      <div className="row d-flex align-items-center m-2 mb-4">
        <Heading title="Movies" />
        <SearchBar value={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <MovieList movies={movies} Component={AddFavorites} OnClickLabel={handleFavClick} />
  
      {/* Favorites container */}
      <div className="row d-flex align-items-center m-2 mb-4">
        <Heading title="Favorites" />
      </div>
      <MovieList movies={favorites} Component={RemoveFavorites} OnClickLabel={handleRemoveFavClick} />
    </>
      );
    }

