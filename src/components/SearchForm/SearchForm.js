import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import iconPath from "../../images/search-icon.svg";
import React from "react";

function SearchForm(props) {
  const [isValid, setIsValid] = React.useState(true);
  const [switcher, setSwitcher] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    setSwitcher(props.switcher);
    setSearchString(props.searchString);
    setIsValid(true);
  }, [props.switcher, props.searchString]);

  function switcherClick() {
    const newSwitcher = !switcher;
    setSwitcher(newSwitcher);
    props.switcherClick(newSwitcher);
  }
  function searchStringChanged(e) {
    setSearchString(e.target.value);
  }
  function searchStringInput() {
    setIsValid(true);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setIsValid(true);
      props.onSubmit(searchString, switcher);
    } else {
      setIsValid(false);
    }
  }

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <div className="search-form__background"></div>
      <div className="search-form__input-container">
        <img
          src={iconPath}
          className="search-form__icon"
          alt="иконка поиска"
        ></img>
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          value={searchString || ""}
          onChange={searchStringChanged}
          onInput={searchStringInput}
          required
        ></input>
        <button type="submit" className="search-form__button"></button>
      </div>
      <div className="search-form__divide"></div>
      <div className="search-form__switcher">
        <FilterCheckbox onClick={switcherClick} switchedOn={switcher} />
      </div>
      <span className={`search-form__error ${
            isValid ? "" : "search-form__error_active"
          }`}>Нужно ввести ключевое слово</span>
    </form>
  );
}

export default SearchForm;
