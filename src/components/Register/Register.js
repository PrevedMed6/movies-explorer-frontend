import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import { useFormWithValidation } from "../../utils/validation";
import React from "react";

function Register(props) {
  const [formErrorText, setFormErrorText] = React.useState("");
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  React.useEffect(() => {
    setFormErrorText(props.errorText);
  }, [props.errorText]);

  function onFormChanged(target) {
    setFormErrorText("");
    handleChange(target);
  }

  function registerUser() {
    props.handleRegister(values["name"], values["email"], values["password"]);
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
      formErrorText={formErrorText}
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
          onChange={onFormChanged}
          required={true}
          minLength={2}
          maxLength={30}
          pattern="[a-zA-ZА-Яа-яЁё \-]+"
        />
        <FormField
          type="email"
          fieldId="email"
          defaultValue=""
          autocomplete="username"
          label="E-mail"
          isValid={errors["email"] ? false : true}
          value={values["email"]}
          error={errors["email"]}
          onChange={onFormChanged}
          required={true}
          pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$"
        />
        <FormField
          type="password"
          label="Пароль"
          fieldId="password"
          autocomplete="new-password"
          defaultValue=""
          isValid={errors["password"] ? false : true}
          value={values["password"]}
          error={errors["password"]}
          onChange={onFormChanged}
          required={true}
        />
      </FormFieldset>
    </Form>
  );
}

export default Register;
