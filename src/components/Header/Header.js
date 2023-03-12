import React from "react";
import { useNavigate } from "react-router-dom";
import AccountLink from "../AccountLink/AccountLink";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();
  const [showBurger, setShowBurger] = React.useState({});

  const resizeHandler = () => {
    setShowBurger(document.documentElement.clientWidth <= 768);
  };

  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function goToLogIn() {
    navigate("/signup", { replace: true });
  }

  const logedIn = props.logedIn === "true";
  return (
    <header className="header">
      <Logo />
      {!logedIn ? (
        <nav className="header__navbar">
          <a href="/signup" className="header__nav-link">
            Регистрация
          </a>
          <button
            type="button"
            className="header__nav-button"
            onClick={goToLogIn}
          >
            Войти
          </button>
        </nav>
      ) : showBurger ? (
        <button type="button" className="header__burger-button"></button>
      ) : (
        <div className="header__nav-area">
          <nav className="header__navbar header__navbar_logged-in">
            <a href="/movies" className="header__nav-link">
              Фильмы
            </a>
            <a href="/saved-movies" className="header__nav-link">
              Сохраненные фильмы
            </a>
          </nav>
          <AccountLink />
        </div>
      )}
    </header>
  );
}

export default Header;
