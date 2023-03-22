import FormField from "../FormField/FormField";
import FormFieldset from "../FormFieldset/FormFieldset";
import Form from "../Form/Form";

function Login() {
  return (
    <Form
      header_text="Рады видеть!"
      submit_text="Войти"
      footer_text="Ещё не зарегистрированы?"
      footer_link_text="Регистрация"
      footer_href="/signup"
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
      </FormFieldset>
    </Form>
  );
}

export default Login;
