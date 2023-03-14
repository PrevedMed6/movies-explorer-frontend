import LandingHeader from "../LandingHeader/LandingHeader";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project" aria-label="about-project">
      <LandingHeader text="О проекте"/>
      <div className="about-project__articles">
        <div className="about-project__article">
          <p className="about-project__main-text">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__article">
          <p className="about-project__main-text">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline"></div>
    </section>
  );
}

export default AboutProject;
