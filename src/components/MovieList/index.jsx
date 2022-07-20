import React from "react";
// import { AddFavourites } from "../AddFavourites/index";

export const Movielist = ({ movies, Favourites, handleFavourites }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movies"></img>
          <div
            onClick={() => handleFavourites(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <Favourites />
          </div>
        </div>
      ))}
    </>
  );
};
