import "./Line.css";

function Line(props) {
  return <hr className={`line ${props.isGray?"line__gray":""}`}></hr>;
}

export default Line;
