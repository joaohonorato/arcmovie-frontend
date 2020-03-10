import React from "react";

export default function MovieSummary({ movie }) {
  const { name, genre, releaseDate, image } = movie;
  const genreList = genre.map(g => <li key={g.id}>{g.name}</li>);
  return (
    <div className="col s12 m6 movie-summary">
      <div className="card  z-depth-2">
        <div className="card-content grey-text text-darken-3">
          <div className="row">
            <div className="card-image col s12 m4">
              <img src={"https://image.tmdb.org/t/p/original" + image} height="20%" width="20%" />
            </div>
            <div className="col s12 m7">
              <span className="card-title">{name}</span>
              <ul>{genreList}</ul>
              <p className="grey-text">{releaseDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
