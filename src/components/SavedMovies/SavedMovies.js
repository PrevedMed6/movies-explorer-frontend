import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Line from "../Line/Line";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NothingToShow from "../NothingToShow/NothingToShow";
import "./SavedMovies.css";
import { savedCards, savedTotal } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

import React from "react";

function SavedMovies() {
  const [switcherOn, setSwitcherOn] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(true);

  function filterShortMetter() {
    setSwitcherOn(!switcherOn);
    //Имитируем загрузку
    setIsLoaded(false);
    setTimeout(hideLoader, 5000);
  }

  function searchSubmit() {
    //Имитируем загрузку
    setIsLoaded(false);
    setTimeout(hideLoader, 5000);
  }

  function hideLoader() {
    setIsLoaded(true);
  }
  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="movies">
        {!isLoaded ? <Preloader /> : ""}
        <SearchForm
          switcherClick={filterShortMetter}
          switcherOn={switcherOn}
          onSubmit={searchSubmit}
        />
        <Line />
        <section className="movies__container" aria-label="cards">
          {savedCards.length > 0 ? (
            <>
              <MoviesCardList
                cards={savedCards}
                total={savedTotal}
                saved={true}
              />
              {savedCards.length < savedTotal ? (
                <button type="button" className="movies__button">
                  Ещё
                </button>
              ) : (
                ""
              )}
            </>
          ) : (
            <NothingToShow />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
