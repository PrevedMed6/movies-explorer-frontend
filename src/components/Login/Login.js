import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
    >
      <FormFieldset>
        <FormField
          type="email"
          label="E-mail"
          defaultValue="mymail@mail.com"
          isValid={true}
        />
        <FormField
          type="password"
          label="Пароль"
          defaultValue="password"
          isValid={true}
        />
      </FormFieldset>
    </Form>
  );
}

export default Login;
