import "./MessageText.css";
function MessageText(props) {
  return (
    <div className="message-text">
      <h2 className="message-text__header">{props.header}</h2>
      <p className="message-text__message">{props.message}</p>
    </div>
  );
}

export default MessageText;
