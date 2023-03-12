import React from "react";
import Line from "../Line/Line";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm
      </p>
      <Line />
      <div className="footer__bottom">
        <div className="footer__copyright">&copy; {currentYear}</div>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/PrevedMed6/movies-explorer-frontend/" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
