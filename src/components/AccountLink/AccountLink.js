import avaPath from "../../images/avatar.svg";
import "./AccountLink.css";

function AccountLink() {
  return (
    <a href="/profile" className="account-link">
      <span>Аккаунт</span>
      <div className="account-link__icon">
        <img alt="аватар" src={avaPath}></img>
      </div>
    </a>
  );
}

export default AccountLink;
