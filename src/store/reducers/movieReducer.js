import { createReducer } from "@reduxjs/toolkit";
import { searchMovie, addMovies } from "../actions/movieAction";

const initState = {
  all: [],
  filteredMovies: []
};

export default createReducer(initState, {
  [searchMovie.type]: (state, action) => {
    if (action.payload !== "") {
      return {
        ...state,
        filteredMovies: state.all.filter(movie => movie.name.toLowerCase().includes(action.search.toLowerCase()))
      };
    }
    return [...initState];
  },
  [addMovies.type]: (state, action) => ({ all: action.payload, filteredMovies: [] })
});
