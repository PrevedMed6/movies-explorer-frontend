import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../utils/validation";
import React from "react";

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [formErrorText, setFormErrorText] = React.useState("");

  React.useEffect(() => {
    setFormErrorText(props.errorText);
  }, [props.errorText]);

  function loginUser() {
    props.onLogin(values["email"], values["password"]);
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
      formErrorText={formErrorText}
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
