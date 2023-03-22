import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Line from "../Line/Line";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NothingToShow from "../NothingToShow/NothingToShow";
import Preloader from "../Preloader/Preloader";
import "./MoviesPresenter.css";

import React from "react";

function Movies(props) {
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
      <main className="movies-presenter">
        {!isLoaded ? <Preloader /> : ""}
        <SearchForm
          switcherClick={filterShortMetter}
          switcherOn={switcherOn}
          onSubmit={searchSubmit}
        />
        <Line isGray={true} />
        <section className="movies-presenter__container" aria-label="cards">
          {props.cards.length > 0 ? (
            <MoviesCardList cards={props.cards} total={props.total} saved={props.saved} />
          ) : (
            <NothingToShow />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
