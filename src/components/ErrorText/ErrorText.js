import "./ErrorText.css";
function ErrorText(props) {
  return (
    <div className="error-text">
      <h2 className="error-text__header">Во время исполнения запроса произошла ошибка</h2>
      <p className="error-text__message">{props.message}</p>
    </div>
  );
}

export default ErrorText;
