import "./AboutMeLink.css";
import arrowPath from "../../images/arrow.svg";

function AboutMeLink(props) {
  return (
    <a
      className="about-me-link"
      href={props.href}
      target={"_blank"}
      rel="noreferrer"
    >
      <span className="about-me-link__text">{props.text}</span>
      <img src={arrowPath} className="about-me-link__arrow" alt="arrow"></img>
    </a>
  );
}

export default AboutMeLink;
