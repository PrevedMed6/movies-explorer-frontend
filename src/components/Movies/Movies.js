import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Line from "../Line/Line";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NothingToShow from "../NothingToShow/NothingToShow";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import { cards, total } from "../../utils/constants";

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

  function hideLoader() {
    setIsLoaded(true);
  }

  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="movies">
      {!isLoaded ? <Preloader /> : ""}
        <SearchForm switcherClick={filterShortMetter} switcherOn={switcherOn} />
        <Line isGray={true} />
        <section className="movies__container" aria-label="cards">
          {cards.length > 0 ? (
            <>
              <MoviesCardList cards={cards} total={total} saved={props} />
              {cards.length < total ? <button type="button">Ещё</button> : ""}
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

export default Movies;
