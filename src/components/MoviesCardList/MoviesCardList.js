import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const cardElements = props.cards.map((card) => (
    <li className="movies-card-list__element" key={card.id}>
      <MoviesCard saved={props.saved} card={card} />
    </li>
  ));
  return (
    <>
      <ul className="movies-card-list">{cardElements}</ul>
      {props.cards.length < props.total ? (
        <button type="button" className="movies-card-list__button">
          Ещё
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
