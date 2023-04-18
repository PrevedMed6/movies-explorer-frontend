import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import moviesApi from "../../utils/MoviesApi";
import { filterCards } from "../../utils/utility";
import "./Movies.css";

import React from "react";

function Movies() {
  const [cards, setCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [switcher, setSwitcher] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [searchString, setSearchString] = React.useState("");
  const [wasError, setWasError] = React.useState(false);

  React.useEffect(() => {
    setCards(JSON.parse(localStorage.getItem("cards")));
    setFilteredCards(JSON.parse(localStorage.getItem("filteredCards")));
    setSwitcher(localStorage.getItem("switcher") === "true");
    setSearchString(localStorage.getItem("searchString"));
  }, []);

  function getCards(searchText, switcherOn) {
    setIsLoaded(false);
    moviesApi
      .getMovies()
      .then((cards) => {
        const filteredCards = filterCards(searchText, switcherOn, cards);
        setSwitcher(switcherOn);
        setSearchString(searchText);
        setCards(cards);
        setFilteredCards(filteredCards);
        setWasError(false);
        localStorage.setItem("switcher", switcherOn);
        localStorage.setItem("searchString", searchText);
        setIsLoaded(true);
      })
      .catch((err) => {
        setWasError(true);
        setCards([]);
        setFilteredCards([]);
        setIsLoaded(true);
      })
      .finally(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
        localStorage.setItem("filteredCards", JSON.stringify(filteredCards));
      });
  }
  function searchSubmit(searchString, switcher) {
    getCards(searchString, switcher);
  }

  function switcherClick(switcherOn, newSearchString) {
    const filteredCards = filterCards(newSearchString, switcherOn, cards);
    setFilteredCards(filteredCards);
    setSwitcher(switcherOn);
    setSearchString(newSearchString);
    localStorage.setItem("searchString", newSearchString);
    localStorage.setItem("switcher", switcherOn);
    localStorage.setItem("filteredCards", JSON.stringify(filteredCards));
  }

  return (
    <MoviesPresenter
      cards={filteredCards}
      total={filteredCards?.length ?? 0}
      saved={false}
      switcher={switcher}
      searchString={searchString}
      searchSubmit={searchSubmit}
      switcherClick={switcherClick}
      isLoaded={isLoaded}
      wasError={wasError}
    />
  );
}

export default Movies;
