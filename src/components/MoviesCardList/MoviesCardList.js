import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const cardElements = props.cards.map((card) => (
    <li className="movies-card-list__element" key={card.id}>
      <MoviesCard saved={props.saved} card={card}/>
    </li>
  ));
  return <ul className="movies-card-list">{cardElements}</ul>;
}

export default MoviesCardList;
