import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Popup from "../Popup/Popup";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();
  const [showBurger, setShowBurger] = React.useState();
  const [menuIsOpen, setmenuIsOpen] = React.useState(false);
  const horisontalMenuLinks = [
    { href: "/movies", text: "Фильмы" },
    { href: "/saved-movies", text: "Сохраненные фильмы" },
  ];
  const verticalMenuLinks = [
    { href: "/", text: "Главная" },
    { href: "/movies", text: "Фильмы" },
    { href: "/saved-movies", text: "Сохраненные фильмы" },
  ];
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
    navigate("/signin", { replace: true });
  }

  function showMenu() {
    setmenuIsOpen(true);
  }

  function hideMenu() {
    setmenuIsOpen(false);
  }

  return (
    <header className={props.colored ? "header header_colored" : "header"}>
      <Popup isOpen={menuIsOpen} links={verticalMenuLinks} onClose={hideMenu}/>
      <Logo />
      {!props.logedIn ? (
        <nav className="header__menu">
          <a href="/signup" className="header__menu-link">
            Регистрация
          </a>
          <button
            type="button"
            className="header__menu-button"
            onClick={goToLogIn}
          >
            Войти
          </button>
        </nav>
      ) : showBurger ? (
        <button
          type="button"
          className="header__burger-button"
          onClick={showMenu}
        ></button>
      ) : (
        <Navigation links={horisontalMenuLinks} />
      )}
    </header>
  );
}

export default Header;
