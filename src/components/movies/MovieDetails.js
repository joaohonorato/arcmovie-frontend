import React from "react";

export default function MovieDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="movie-detail container section">
      <div className="card z-depth-0">
        <div class="card-image waves-effect waves-block waves-light">Movie Poster or Backdrop Image</div>
        <div className="card-content">
          <span className="card-title">Movie title {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate
            accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Release date</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}
