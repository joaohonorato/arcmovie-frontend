import React from "react";
import Filter from "./Filter";
import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const movies = useSelector(state => {
    console.log(state);
    return state.movies;
  });
  return (
    <div className="dashboard container">
      <div className="row filters">
        <Filter />
      </div>
      <div className="row movies">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
