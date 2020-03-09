import React from "react";

const MovieSummary = ({ movie }) => {
  console.log(movie);
  const { title, genre_ids, release_date } = movie;
  return (
    <div className="col s12 m6 card z-depth-0 movie-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="row">
          <div className="card-image col s12 m4">Movie Poster or Backdrop Image</div>
          <div className="col s12 m8">
            <span className="card-title">{title}</span>
            <p>{genre_ids.toString()}</p>
            <p className="grey-text">{release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
