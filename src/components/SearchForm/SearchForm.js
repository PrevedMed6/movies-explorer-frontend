import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import iconPath from "../../images/search-icon.svg"

function SearchForm(props) {
  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <form className="search-form">
      <div className="search-form__background"></div>
      <div className="search-form__input-container">
        <img src={iconPath} className="search-form__icon" alt="иконка поиска"></img>
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          required
        ></input>
        <button
          type="submit"
          onClick={onSubmit}
          className="search-form__button"
        ></button>
      </div>
      <div className="search-form__divide"></div>
      <div className="search-form__switcher">
        <FilterCheckbox onClick={props.switcherClick} on={props.switcherOn} />
      </div>
    </form>
  );
}

export default SearchForm;
