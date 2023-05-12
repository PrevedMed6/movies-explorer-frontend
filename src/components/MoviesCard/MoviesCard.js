import React from "react";
import "./MoviesCard.css";
import { externalUrl } from "../../utils/constants";
import { getDurationString } from "../../utils/utility";

function MoviesCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);

  function likeClick() {
    setIsLiked(!isLiked);
  }

  function deleteCard() {
    alert("Скоро мы научимся удалять карточки");
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
              isLiked ? "movies-card__like_active" : ""
            }`}
          ></button>
        ) : (
          <button
            type="button"
            className="movies-card__delete"
            onClick={deleteCard}
          ></button>
        )}
      </div>
      <a href={props.card.trailerLink} target={"_blank"} rel="noreferrer" className="movies-card__trailer-link">
        <div
          className="movies-card__body"
          role="img"
          style={{
            backgroundImage: `url(${externalUrl}${props.card.image.url})`,
          }}
        ></div>
      </a>
    </div>
  );
}

export default MoviesCard;
