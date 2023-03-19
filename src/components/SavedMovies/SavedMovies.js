import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Line from "../Line/Line";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import {savedCards} from "../../utils/constants"
function SavedMovies() {
  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="movies">
        <SearchForm />
        <Line />
        <MoviesCardList cards={savedCards} total={4} saved={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
