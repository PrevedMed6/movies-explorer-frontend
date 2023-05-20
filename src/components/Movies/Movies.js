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
      setWasSearched(true);
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
        const filteredFilms = doSearch(searchText, switcherOn, mappedResult);
        fixSearchResult(searchText, switcherOn, mappedResult, filteredFilms);
        setWasError(false);
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
  function searchSubmit(newSearchString, switcherOn) {
    if (cards.length === 0) {
      getCards(newSearchString, switcherOn);
    } else {
      const filteredFilms = doSearch(newSearchString, switcherOn, cards);
      fixSearchResult(newSearchString, switcherOn, cards, filteredFilms);
    }
  }

  function switcherClick(newSearchString, switcherOn) {
    const filteredFilms = doSearch(newSearchString, switcherOn, cards);
    fixSearchResult(newSearchString, switcherOn, cards, filteredFilms);
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

  function doSearch(searchText, switcherOn, mappedFilms) {
    const filteredFilms = filterCards(searchText, switcherOn, mappedFilms);
    return filteredFilms;
  }

  function fixSearchResult(searchText, switcherOn, mappedFilms, filteredFilms) {
    setSwitcher(switcherOn);
    setSearchString(searchText);
    setCards(mappedFilms);
    setFilteredCards(filteredFilms);
    localStorage.setItem("switcher", switcherOn);
    localStorage.setItem("searchString", searchText);
    localStorage.setItem("cards", JSON.stringify(mappedFilms));
    localStorage.setItem("filteredCards", JSON.stringify(filteredFilms));
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
