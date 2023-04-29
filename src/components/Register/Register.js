import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";

function Register() {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  function registerUser() {
    if (isValid) {
      alert("Скоро будем регистрировать!");
      navigate("/movies", { replace: true });
    }
  }

  return (
    <Form
      header_text="Добро пожаловать!"
      submit_text="Зарегистрироваться"
      footer_text="Уже зарегистрированы?"
      footer_link_text="Войти"
      footer_href="/signin"
      onSubmit={registerUser}
      isValid={isValid}
    >
      <FormFieldset>
        <FormField
          type="text"
          label="Имя"
          fieldId="name"
          defaultValue=""
          isValid={errors["name"] ? false : true}
          value={values["name"]}
          error={errors["name"]}
          onChange={handleChange}
          required={true}
          minLength={2}
          maxLength={30}
          pattern="[a-zA-ZА-Яа-яЁё -]+"
        />
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

export default Register;
