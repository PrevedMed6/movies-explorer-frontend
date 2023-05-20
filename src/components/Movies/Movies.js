import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  filterCards,
  mapExternalCards,
  updateStore,
} from "../../utils/utility";
import "./Movies.css";

import React from "react";

function Movies(props) {
  const [cards, setCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [switcher, setSwitcher] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [wasSearched, setWasSearched] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [wasError, setWasError] = React.useState(false);

  React.useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
    const storedFilteredCards = localStorage.getItem("filteredCards");
    if (storedFilteredCards) {
      setFilteredCards(JSON.parse(storedFilteredCards));
    }
    setSwitcher(localStorage.getItem("switcher") === "true");
    setSearchString(localStorage.getItem("searchString"));
  }, []);

  function getCards(searchText, switcherOn) {
    setIsLoaded(false);
    Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
      .then(([result, savedResult]) => {
        const mappedResult = mapExternalCards(result, savedResult);
        const filteredFilms = filterCards(searchText, switcherOn, mappedResult);
        setSwitcher(switcherOn);
        setSearchString(searchText);
        setCards(mappedResult);
        setFilteredCards(filteredFilms);
        setWasError(false);
        localStorage.setItem("switcher", switcherOn);
        localStorage.setItem("searchString", searchText);
        localStorage.setItem("cards", JSON.stringify(mappedResult));
        localStorage.setItem("filteredCards", JSON.stringify(filteredFilms));
        setIsLoaded(true);
        setWasSearched(true);
      })
      .catch((err) => {
        setWasError(true);
        setCards([]);
        setFilteredCards([]);
        setIsLoaded(true);
        localStorage.setItem("cards", []);
        localStorage.setItem("filteredCards", []);
      });
  }
  function searchSubmit(searchString, switcher) {
    getCards(searchString, switcher);
  }

  function switcherClick(newSearchString, switcherOn) {
    const filteredFilms = filterCards(newSearchString, switcherOn, cards);
    setFilteredCards(filteredFilms);
    setSwitcher(switcherOn);
    setSearchString(newSearchString);
    localStorage.setItem("searchString", newSearchString);
    localStorage.setItem("switcher", switcherOn);
    localStorage.setItem("filteredCards", JSON.stringify(filteredFilms));
  }

  function handleDeleteMovie(movie) {
    return mainApi
      .deleteMovie(movie.innerId)
      .then((deletedMovie) => {
        refreshLikes(false, deletedMovie.data.movieId, null);
      })
      .catch((result) => {
        result.json().then((err) => {
          props.handleError(err.message);
        });
      });
  }

  function handleSaveMovie(movie) {
    return mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        refreshLikes(true, savedMovie.data.movieId, savedMovie.data._id);
      })
      .catch((result) => {
        result.json().then((err) => {
          props.handleError(err.message);
        });
      });
  }

  function refreshLikes(isLiked, movieId, innerId) {
    const { cloneCards, filteredFilms } = updateStore(
      cards,
      movieId,
      isLiked,
      innerId,
      searchString,
      switcher
    );
    setCards(cloneCards);
    setFilteredCards(filteredFilms);
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
      wasSearched={wasSearched}
      wasError={wasError}
      loggedIn={props.loggedIn}
      handleDeleteMovie={handleDeleteMovie}
      handleSaveMovie={handleSaveMovie}
      handleError={props.handleError}
    />
  );
}

export default Movies;
