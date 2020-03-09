import React, { Component } from "react";
import Filter from "./Filter";
import MovieList from "../movies/MovieList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row filters">
          <Filter />
        </div>
        <div className="row movies">
          <MovieList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
