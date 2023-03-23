import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const switchedOn = props.on;
  function switchSearch(e) {
    e.preventDefault();
    props.onClick();
  }
  return (
    <div className="filter-check-box">
      <button
        className={`filter-check-box__button${
          switchedOn ? " filter-check-box__button_off" : ""
        }`}
        onClick={switchSearch}
      ></button>
      <span className="filter-check-box__label">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
