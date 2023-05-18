import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import "./SavedMovies.css";
import React from "react";
import mainApi from "../../utils/MainApi";
import { filterCards, updateStore } from "../../utils/utility";

function SavedMovies(props) {
  const [savedCards, setSavedCards] = React.useState([]);
  const [savedFilteredCards, setSavedFilteredCards] = React.useState([]);
  const [savedSwitcher, setSavedSwitcher] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [savedSearchString, setSavedSearchString] = React.useState("");
  const [wasError, setWasError] = React.useState(false);
  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedResult) => {
        setSavedFilteredCards(savedResult.data);
        setSavedCards(savedResult.data);
        setIsLoaded(true);
      })
      .catch((err) => setWasError(true));
  }, []);

  function searchSubmit(searchString, switcher) {
    const filteredFilms = filterCards(searchString, switcher, savedCards);
    setSavedFilteredCards(filteredFilms);
    setSavedSearchString(searchString);
    setSavedSwitcher(switcher);
  }

  function handleDeleteMovie(movie) {
    return mainApi
      .deleteMovie(movie._id)
      .then((deletedMovie) => {
        refreshLikes(deletedMovie);
        setSavedCards((state) =>
          state.filter((c) => {
            return c._id !== movie._id;
          })
        );
        setSavedFilteredCards((state) =>
          state.filter((c) => {
            return c._id !== movie._id;
          })
        );
      })
      .catch((result) => {
        result.json().then((err) => {
          props.handleError(err.message);
        });
      });
  }

  function refreshLikes(deletedMovie) {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      updateStore(
        JSON.parse(storedCards),
        deletedMovie.data.movieId,
        false,
        null,
        savedSearchString,
        savedSwitcher
      );
    }
  }
  return (
    <MoviesPresenter
      cards={savedFilteredCards}
      total={savedFilteredCards?.length ?? 0}
      saved={true}
      switcher={savedSwitcher}
      searchString={savedSearchString}
      searchSubmit={searchSubmit}
      switcherClick={searchSubmit}
      isLoaded={isLoaded}
      wasError={wasError}
      loggedIn={props.loggedIn}
      handleDeleteMovie={handleDeleteMovie}
      handleError={props.handleError}
    />
  );
}

export default SavedMovies;
