import Line from "../Line/Line";
import "./LandingHeader.css";

function LandingHeader(props) {
  return (
    <div className="landing-header">
      <h2 className="landing-header__text">{props.text}</h2>
      <Line />
    </div>
  );
}

export default LandingHeader;
