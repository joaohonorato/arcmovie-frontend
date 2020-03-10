import React from "react";

export default function MovieSummary({ movie }) {
  const { title, genre_ids, release_date, poster_path, backdrop_path } = movie;
  return (
    <div className="col s12 m6 movie-summary">
      <div className="card  z-depth-2">
        <div className="card-content grey-text text-darken-3">
          <div className="row">
            <div className="card-image col s12 m4">
              <img
                src={"https://image.tmdb.org/t/p/original" + poster_path}
                alt={"https://image.tmdb.org/t/p/original" + backdrop_path}
                height="20%"
                width="20%"
              />
            </div>
            <div className="col s12 m7">
              <span className="card-title">{title}</span>
              <p>{genre_ids.toString()}</p>
              <p className="grey-text">{release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
