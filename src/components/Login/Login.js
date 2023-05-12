import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";

function Login(props) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  function loginUser() {
    props.onLogin(values["email"], values["password"]);
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
          autocomplete="username"
          defaultValue=""
          label="E-mail"
          isValid={errors["email"] ? false : true}
          value={values["email"]}
          error={errors["email"]}
          onChange={handleChange}
          required={true}
          pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$"
        />
        <FormField
          type="password"
          label="Пароль"
          fieldId="password"
          autocomplete="current-password"
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
