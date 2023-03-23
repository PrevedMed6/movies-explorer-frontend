import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function registerUser() {
    alert("Скоро будем регистрировать!");
    navigate("/movies", { replace: true });
  }

  return (
    <Form
      header_text="Добро пожаловать!"
      submit_text="Зарегистрироваться"
      footer_text="Уже зарегистрированы?"
      footer_link_text="Войти"
      footer_href="/signin"
      onSubmit={registerUser}
    >
      <FormFieldset>
        <FormField
          type="text"
          label="Имя"
          fieldId="name"
          defaultValue="Евгения"
          isValid={true}
        />
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
          isValid={false}
        />
      </FormFieldset>
    </Form>
  );
}

export default Register;
