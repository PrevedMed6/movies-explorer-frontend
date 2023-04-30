import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";

function Login() {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  function loginUser() {
    alert("Скоро будем логинить!");
    navigate("/movies", { replace: true });
  }

  return (
    <Form
      header_text="Рады видеть!"
      submit_text="Войти"
      footer_text="Ещё не зарегистрированы?"
      footer_link_text="Регистрация"
      footer_href="/signup"
      onSubmit={loginUser}
      isValid={isValid}
    >
      <FormFieldset>
        <FormField
          type="email"
          fieldId="email"
          defaultValue=""
          label="E-mail"
          isValid={errors["email"] ? false : true}
          value={values["email"]}
          error={errors["email"]}
          onChange={handleChange}
          required={true}
          pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
        />
        <FormField
          type="password"
          label="Пароль"
          fieldId="password"
          defaultValue=""
          isValid={errors["password"] ? false : true}
          value={values["password"]}
          error={errors["password"]}
          onChange={handleChange}
          required={true}
        />
      </FormFieldset>
    </Form>
  );
}

export default Login;
