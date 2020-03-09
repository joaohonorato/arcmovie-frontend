import React from "react";
import MovieSummary from "./MovieSummary";

const MovieList = () => {
  return (
    <div className="movie-list section">
      <MovieSummary />
      <MovieSummary />
      <MovieSummary />
    </div>
  );
};

export default MovieList;
