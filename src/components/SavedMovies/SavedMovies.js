import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import "./SavedMovies.css";
import { savedCards, savedTotal } from "../../utils/constants";

function SavedMovies(props) {
  return (
    <MoviesPresenter
      cards={savedCards}
      total={savedTotal}
      saved={true}
      loggedIn={props.loggedIn}
    />
  );
}

export default SavedMovies;
