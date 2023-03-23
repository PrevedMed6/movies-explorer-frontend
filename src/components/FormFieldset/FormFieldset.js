
import "./FormFieldset.css";

function FormFieldset(props) {
  return (
    <fieldset className="form-fieldset">{props.children}</fieldset>
  );
}

export default FormFieldset;
