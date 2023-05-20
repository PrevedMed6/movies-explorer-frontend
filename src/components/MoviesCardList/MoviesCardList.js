import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import {
  LARGE_MOBILE,
  LARGE_MOBILE_ELEMENTS_PER_PAGE,
  LARGE_MOBILE_ELEMENTS_TO_ADD,
  TABLET,
  TABLET_ELEMENTS_PER_PAGE,
  TABLET_ELEMENTS_TO_ADD,
  DESC_TOP_ELEMENTS_PER_PAGE,
  DESC_TOP_ELEMENTS_TO_ADD,
} from "../../utils/constants";

function MoviesCardList(props) {
  const [elementsPerPage, setElementsPerPage] = React.useState(12);
  const [elementsToAdd, setElementsToAdd] = React.useState(3);
  const [cardsToShow, setCardsToShow] = React.useState([]);
  const [cards, setCards] = React.useState(props.cards);

  React.useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  React.useEffect(() => {
    function doSettings() {
      if (document.documentElement.clientWidth > TABLET) {
        setElementsPerPage(DESC_TOP_ELEMENTS_PER_PAGE);
        setElementsToAdd(DESC_TOP_ELEMENTS_TO_ADD);
      } else if (document.documentElement.clientWidth > LARGE_MOBILE) {
        setElementsPerPage(TABLET_ELEMENTS_PER_PAGE);
        setElementsToAdd(TABLET_ELEMENTS_TO_ADD);
      } else {
        setElementsPerPage(LARGE_MOBILE_ELEMENTS_PER_PAGE);
        setElementsToAdd(LARGE_MOBILE_ELEMENTS_TO_ADD);
      }
      if (props.saved) {
        setElementsPerPage(props.total);
      }
    }
    const resizeHandler = () => {
      setTimeout(() => {
        doSettings();
      }, 1000);
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [props.saved, props.total]);

  React.useEffect(() => {
    setCardsToShow(cards.slice(0, elementsPerPage));
  }, [cards, elementsPerPage]);

  function handleAddClick() {
    if (elementsPerPage + elementsToAdd <= props.total) {
      setElementsPerPage(elementsPerPage + elementsToAdd);
    } else {
      setElementsPerPage(props.total);
    }
  }

  const cardElements = cardsToShow.map((card) => (
    <li className="movies-card-list__element" key={card.movieId}>
      <MoviesCard
        saved={props.saved}
        card={card}
        handleDeleteMovie={props.handleDeleteMovie}
        handleSaveMovie={props.handleSaveMovie}
        handleError={props.handleError}
      />
    </li>
  ));
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__list">{cardElements}</ul>
      {cardsToShow.length < props.total ? (
        <button
          type="button"
          className="movies-card-list__button"
          onClick={handleAddClick}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default MoviesCardList;
