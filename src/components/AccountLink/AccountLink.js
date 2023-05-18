import avaPath from "../../images/avatar.svg";
import { NavLink } from "react-router-dom";
import "./AccountLink.css";

function AccountLink() {
  return (
    <NavLink to="/profile" className="account-link">
      <span>Аккаунт</span>
      <div className="account-link__icon">
        <img alt="аватар" src={avaPath}></img>
      </div>
    </NavLink>
  );
}

export default AccountLink;
