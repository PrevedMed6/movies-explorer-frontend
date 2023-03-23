import Line from "../Line/Line";
import AboutMeLink from "../AboutMeLink/AboutMeLink";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <AboutMeLink
            text="Статичный сайт"
            href="https://prevedmed6.github.io/how-to-learn/"
          />
          <Line isGray={true} />
        </li>
        <li className="portfolio__item">
          <AboutMeLink
            text="Адаптивный сайт"
            href="https://prevedmed6.github.io/russian-travel/"
          />
          <Line isGray={true} />
        </li>
        <li className="portfolio__item">
          <AboutMeLink
            text="Одностраничное приложение"
            href="https://prevedmed6.github.io/mesto/"
          />
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
