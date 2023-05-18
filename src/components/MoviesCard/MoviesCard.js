import React from "react";
import "./MoviesCard.css";
import { getDurationString } from "../../utils/utility";

function MoviesCard(props) {
  function likeClick() {
    props.card.isLiked ? deleteMovie() : saveMovie();
  }

  function deleteMovie() {
    props.handleDeleteMovie(props.card._id);
  }

  function saveMovie() {
    const movie = {
      country: props.card.country,
      director: props.card.director,
      duration: props.card.duration,
      year: props.card.year,
      description: props.card.description,
      image: props.card.image,
      trailerLink: props.card.trailerLink,
      thumbnail: props.card.thumbnail,
      movieId: props.card.movieId,
      nameRU: props.card.nameRU,
      nameEN: props.card.nameEN,
    };
    props.handleSaveMovie(movie);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__header-text">
          <p className="movies-card__title">{props.card.nameRU}</p>
          <p className="movies-card__duration">
            {getDurationString(props.card.duration)}
          </p>
        </div>
        {!props.saved ? (
          <button
            type="button"
            onClick={likeClick}
            className={`movies-card__like ${
              props.card.isLiked ? "movies-card__like_active" : ""
            }`}
          ></button>
        ) : (
          <button
            type="button"
            className="movies-card__delete"
            onClick={deleteMovie}
          ></button>
        )}
      </div>
      <a
        href={props.card.trailerLink}
        target={"_blank"}
        rel="noreferrer"
        className="movies-card__trailer-link"
      >
        <div
          className="movies-card__body"
          role="img"
          style={{
            backgroundImage: `url(${props.card.image})`,
          }}
        ></div>
      </a>
    </div>
  );
}

export default MoviesCard;
