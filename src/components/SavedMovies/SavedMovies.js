import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import "./SavedMovies.css";
import { savedCards, savedTotal } from "../../utils/constants";

function SavedMovies() {
  return <MoviesPresenter cards={savedCards} total={savedTotal} saved={true}/>;
}

export default SavedMovies;
