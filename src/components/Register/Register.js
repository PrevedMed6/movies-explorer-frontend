import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";

function Register() {
  return (
    <Form
      header_text="Добро пожаловать!"
      submit_text="Зарегистрироваться"
      footer_text="Уже зарегистрированы?"
      footer_link_text="Войти"
      footer_href="/signin"
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
