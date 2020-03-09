import React, { Component } from "react";
import Filter from "./Filter";
import MovieList from "../movies/MovieList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const movies = this.props.movies;
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
}

const mapStateToProps = state => {
  return {
    movies: state.results
  };
};

export default connect(mapStateToProps)(Dashboard);
