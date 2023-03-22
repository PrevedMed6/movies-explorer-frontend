import { cards, total } from "../../utils/constants";
import MoviesPresenter from "../MoviesPresenter/MoviesPresenter";
import "./Movies.css";

function Movies(props) {
  return <MoviesPresenter cards={cards} total={total} saved={false} />;
}

export default Movies;
