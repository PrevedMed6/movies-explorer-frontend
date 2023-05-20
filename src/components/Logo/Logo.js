import { NavLink } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <NavLink className="logo" to="/">
      <img className="logo__picture" alt="Логотип" src={logoPath} />
    </NavLink>
  );
}

export default Logo;
