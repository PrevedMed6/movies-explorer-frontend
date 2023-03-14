import "./NavTab.css";

function NavTab() {
  return (
    <div className="nav-tab" aria-label="landing-navigation">
      <nav className="nav-tab__navigation">
        <a className="nav-tab__link" href="#about-project">
          О проекте
        </a>
        <a className="nav-tab__link" href="#techs">
          Технологии
        </a>
        <a className="nav-tab__link" href="#about-me">
          Студент
        </a>
      </nav>
    </div>
  );
}

export default NavTab;
