import React from "react";
import MovieSummary from "./MovieSummary";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  if (movies.filteredMovies.length === 0) {
    movies = movies.all;
  } else {
    movies = movies.filteredMovies;
  }
  return (
    <div className="movie-list section">
      {movies &&
        movies.map(movie => {
          return (
            <Link to={"movies/" + movie.id} key={movie.id}>
              <MovieSummary movie={movie} key={movie.id} />
            </Link>
          );
        })}
    </div>
  );
}
