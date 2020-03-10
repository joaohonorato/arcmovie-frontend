import React, { Component } from "react";
import Filter from "./Filter";
import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const movies2 = useSelector(state => state.movies.results);
  return (
    <div className="dashboard container">
      <div className="row filters">
        <Filter />
      </div>
      <div className="row movies">
        <MovieList movies={movies2} />
      </div>
    </div>
  );
}
