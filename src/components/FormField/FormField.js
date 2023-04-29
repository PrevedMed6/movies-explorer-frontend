import Line from "../Line/Line";
import "./FormField.css";

function FormField(props) {
  return (
    <div className="form-field">
      <label htmlFor={props.fieldId} className="form-field__label">
        {props.label}
      </label>
      <input
        id={props.fieldId}
        name={props.fieldId}
        type={props.type}
        className={`form-field__input ${
          props.isValid ? "" : "form-field__input_invalid"
        }`}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern={props.pattern}
      ></input>
      <Line isGray={true} />
      <span
        className={`form-field__message ${
          props.isValid ? "" : "form-field__message_active"
        }`}
      >
        {props.error}
      </span>
    </div>
  );
}

export default FormField;
