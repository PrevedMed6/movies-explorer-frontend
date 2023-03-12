import React from "react";
import logoPath from '../../images/logo.svg';
import "./Logo.css";

function Logo() {
  return (
  <a className="logo" href="/">
    <img className="logo__picture" alt="Логотип" src={logoPath}/>
  </a>
);
}

export default Logo;
