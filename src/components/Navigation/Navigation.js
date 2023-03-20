import AccountLink from "../AccountLink/AccountLink";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav
      className={`navigation ${props.vertical ? "navigation_vertical" : ""}`}
    >
      <div
        className={`navigation__links ${
          props.vertical ? "navigation__links_vertical" : ""
        }`}
      >
        {props.links?.map((link, index) => (
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""} ${
                props.vertical ? "navigation__link_vertical" : ""
              }`
            }
            key={index}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <AccountLink />
    </nav>
  );
}

export default Navigation;
