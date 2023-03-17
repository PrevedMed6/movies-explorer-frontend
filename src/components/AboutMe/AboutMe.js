import LandingHeader from "../LandingHeader/LandingHeader";
import AboutMeLink from "../AboutMeLink/AboutMeLink";
import "./AboutMe.css";
import photoPath from "../../images/photo.jpg";
import Line from "../Line/Line";

function AboutMe() {
  return (
    <article className="about-me" id="about-me" aria-label="about-me">
      <LandingHeader text="Студентка" />
      <div className="about-me__profile">
        <h2 className="about-me__name">Евгения</h2>
        <div className="about-me__photo-container">
          <img src={photoPath} className="about-me__photo" alt="myphoto"></img>
        </div>
        <p className="about-me__description">Фронтенд-разработчик, 39 лет</p>
        <p className="about-me__text">
          Живу в Воронеже, люблю авторскую песню,
          огородничать и кататься на лыжах. С 2012 года занималась разработкой
          под SharePoint, в какой-то момент поняла, что пришло время двигаться
          дальше, поэтому решила освоить фронтенд-разработку. В настоящее время
          работаю в IT-компании и уже применяю полученные знания.
        </p>
        <a
          className="about-me__repo"
          href="https://github.com/PrevedMed6"
          target={"_blank"}
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="about-me__portfolio">
        <h2 className="about-me__portfolio-header">Портфолио</h2>
        <ul className="about-me__portfolio-list">
          <li className="about-me__portfolio-item">
            <AboutMeLink
              text="Статичный сайт"
              href="https://prevedmed6.github.io/how-to-learn/"
            />
            <Line isGray={true} />
          </li>
          <li className="about-me__portfolio-item">
            <AboutMeLink
              text="Адаптивный сайт"
              href="https://prevedmed6.github.io/russian-travel/"
            />
            <Line isGray={true} />
          </li>
          <li className="about-me__portfolio-item">
            <AboutMeLink
              text="Одностраничное приложение"
              href="https://prevedmed6.github.io/mesto/"
            />
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
