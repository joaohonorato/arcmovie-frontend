import React, { useEffect } from "react";
import Filter from "./Filter";
import MovieList from "../movies/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../store/actions/movieFetchAction";

export default function Dashboard() {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
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
