import React from "react";
import MovieSummary from "./MovieSummary";

export default function MovieList({ movies }) {
  //console.log(movies);
  return (
    <div className="movie-list section">
      {movies &&
        movies.map(movie => {
          return <MovieSummary movie={movie} key={movie.id} />;
        })}
    </div>
  );
}
