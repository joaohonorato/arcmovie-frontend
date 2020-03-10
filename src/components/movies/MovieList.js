import React from "react";
import MovieSummary from "./MovieSummary";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
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
