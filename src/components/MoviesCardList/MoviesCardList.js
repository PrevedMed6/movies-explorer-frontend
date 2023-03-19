import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const cardElements = props.cards.map((card) => (
    <li className="element" key={card.id}>
      <MoviesCard saved={props.saved} />
    </li>
  ));
  return <ul className="movies-card-list">{cardElements}</ul>;
}

export default MoviesCardList;
