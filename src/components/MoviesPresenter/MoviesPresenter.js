import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Line from "../Line/Line";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MessageContainer from "../MessageContainer/MessageContainer";
import Preloader from "../Preloader/Preloader";
import { NOTHING_TO_SHOW_TEXT, MOVIES_ERROR_TEXT } from "../../utils/constants";
import "./MoviesPresenter.css";

import React from "react";

function MoviesPresenter(props) {
  function searchSubmit(searchString, switcher) {
    props.searchSubmit(searchString, switcher);
  }

  function switcherClick(switcher, searchString) {
    props.switcherClick(switcher, searchString);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} colored={false} />
      <main className="movies-presenter">
        <SearchForm
          onSubmit={searchSubmit}
          switcher={props.switcher}
          searchString={props.searchString}
          switcherClick={switcherClick}
          saved={props.saved}
        />
        <Line isGray={true} />
        <section className="movies-presenter__container" aria-label="cards">
          {!props.isLoaded ? <Preloader /> : ""}
          {!props.wasError ? (
            props.cards && props.wasSearched ? (
              props.cards.length > 0 ? (
                <MoviesCardList
                  cards={props.cards}
                  total={props.total}
                  saved={props.saved}
                  handleDeleteMovie={props.handleDeleteMovie}
                  handleSaveMovie={props.handleSaveMovie}
                  handleError={props.handleError}
                />
              ) : (
                <MessageContainer message={NOTHING_TO_SHOW_TEXT} />
              )
            ) : (
              ""
            )
          ) : (
            <MessageContainer message={MOVIES_ERROR_TEXT} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MoviesPresenter;
