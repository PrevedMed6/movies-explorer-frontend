import Logo from "../Logo/Logo";
import "./Form.css";

function Form(props) {
  function submitForm(e) {
    e.preventDefault();
    if (props.isValid) {
      props.onSubmit();
    }
  }
  return (
    <section className="form">
      <div className="form__header">
        <Logo />
        <h1 className="form__header-text">{props.header_text}</h1>
      </div>
      <form className="form__form-body" onSubmit={submitForm} noValidate>
        {props.children}
        <span className="form__form-error-text">{props.formErrorText}</span>
        <button
          type="submit"
          className={`form__submit ${
            props.isValid ? "" : "form__submit_disabled"
          }`}
        >
          {props.submit_text}
        </button>
      </form>
      <div className="form__footer">
        <span className="form__footer-text">{props.footer_text}</span>
        <a href={props.footer_href} className="form__footer-link">
          {props.footer_link_text}
        </a>
      </div>
    </section>
  );
}

export default Form;
