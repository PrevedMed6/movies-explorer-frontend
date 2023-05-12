import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import MainApi from "../../utils/MainApi";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validation";
import React from "react";

function Register() {
  const [formErrorText, setFormErrorText] = React.useState("");
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  function onFormChanged(target){
    setFormErrorText("");
    handleChange(target);
  }
  function registerUser() {
    MainApi
      .register(values["name"], values["email"], values["password"])
      .then(() => {
        alert("тут надо логинить!");
        navigate("/movies", { replace: true });
      })
      .catch((result) => {
        result.json().then((err) => {
          setFormErrorText(err.message);
        });
      });
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
