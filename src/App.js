import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Movielist } from "./components/MovieList";
import { Header } from "./components/Heading";
import { SearchBox } from "./components/SearchBox";
import { AddFavourites } from "./components/AddFavourites";
import { RemoveFavourites } from "./components/RemoveFavourites";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5d4063c3`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const handleAddFavourites = (movie) => {
    const newFilm = [...favourites, movie];
    setFavourites(newFilm);
  };


  const handleRemoveFavourites = (movie) => {
    const Removed = favourites.filter(value => value.imdbID !== movie.imdbID)
    setFavourites(Removed)
  }
  return (
    <div className="container-fluid movie-app ">
      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <Header heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <Movielist
          handleFavourites={handleAddFavourites}
          Favourites={AddFavourites}
          movies={movies}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <Header heading="Favourites" />
      </div>
      <div className="row">
        <Movielist
          handleFavourites={handleRemoveFavourites}
          Favourites={RemoveFavourites}
          movies={favourites}
        />
      </div>
    </div>
  );
};

export default App;
