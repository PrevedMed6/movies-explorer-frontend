import "./Line.css";

function Line(props) {
  return <hr className={`line ${props.isGray?"line_gray":""}`}></hr>;
}

export default Line;
