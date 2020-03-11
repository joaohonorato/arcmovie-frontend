import React from "react";
import { useSelector } from "react-redux";

export default function MovieDetails(props) {
  const movies = useSelector(state => state.movies.all);
  const id = props.match.params.id;
  const movie = movies.filter(m => m.id === parseInt(id))[0];
  const { name, genre, releaseDate, image, overview } = movie;
  const genreList = genre === [] ? [] : genre.map(g => <li key={g.id}>{g.name}</li>);

  if (movie) {
    return (
      <div className="row">
        <div className="movie-detail container section">
          <div className="card z-depth-0">
            <div className="col m6 s12">
              <img src={image && "https://image.tmdb.org/t/p/original/" + image} alt="" height="80%" width="80%" />
            </div>
            <div className="col m6 s12">
              <div className="card-content">
                <h1 className="card-title">{name} </h1>
                <ul>{genreList}</ul>
                <p>{overview}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <p>
                  <strong>Release date: </strong>
                  {releaseDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
}
