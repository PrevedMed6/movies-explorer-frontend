import Line from "../Line/Line";
import "./FormField.css";

function FormField(props) {
  return (
    <div className="form-field">
      <label htmlFor={props.fieldId} className="form-field__label">{props.label}</label>
      <input id={props.fieldId}
        type={props.type}
        className={`form-field__input ${
          props.isValid ? "" : "form-field__input_invalid"
        }`} defaultValue={props.defaultValue}
      ></input>
      <Line isGray={true} />
      <span
        className={`form-field__message ${
          props.isValid ? "" : "form-field__message_active"
        }`}
      >
        Что-то пошло не так...
      </span>
    </div>
  );
}

export default FormField;
