import AccountLink from "../AccountLink/AccountLink";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav
      className={`navigation ${props.vertical ? "navigation_vertical" : ""}`}
    >
      <div className={`navigation__links ${props.vertical ? "navigation__links_vertical" : ""}`}>
        {props.links?.map((link, index) => (
          <a href={link.href} className={`navigation__link ${props.vertical ? "navigation__link_vertical" : ""}`} key={index}>
            {link.text}
          </a>
        ))}
      </div>
      <AccountLink />
    </nav>
  );
}

export default Navigation;
