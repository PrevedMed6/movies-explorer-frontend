import "./MessageContainer.css";

function MessageContainer(props) {
  return <div className="message-container">{props.message}</div>;
}

export default MessageContainer;
