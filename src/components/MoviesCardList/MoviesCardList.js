import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList(props) {
  const [elementsPerPage, setElementsPerPage] = React.useState(12);
  const [elementsToAdd, setElementsToAdd] = React.useState(3);
  const [cardsToShow, setCardsToShow] = React.useState([]);
  const [cards, setCards] = React.useState(props.cards);

  React.useEffect(() => {
    doSettings();
    setCards(props.cards);
  }, [props.cards]);

  React.useEffect(() => {
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
  }, []);

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

  function doSettings() {
    if (document.documentElement.clientWidth > 768) {
      setElementsPerPage(12);
      setElementsToAdd(3);
    } else if (document.documentElement.clientWidth > 480) {
      setElementsPerPage(8);
      setElementsToAdd(2);
    } else {
      setElementsPerPage(5);
      setElementsToAdd(2);
    }
  }

  const cardElements = cardsToShow.map((card) => (
    <li className="movies-card-list__element" key={card.id}>
      <MoviesCard saved={props.saved} card={card} />
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
