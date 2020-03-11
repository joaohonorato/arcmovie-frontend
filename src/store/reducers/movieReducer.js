import { createReducer } from "@reduxjs/toolkit";
import { searchMovie, addMovies } from "../actions/movieAction";

const initState = [];

export default createReducer(initState, {
  [searchMovie.type]: (state, action) => {
    if (action.payload !== "") {
      return [...state.filter(movie => movie.name.toLowerCase().includes(action.search.toLowerCase()))];
    }
    return [...initState];
  },
  [addMovies.type]: (state, action) => [...action.payload]
});
