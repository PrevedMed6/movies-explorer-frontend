import React from "react";
import Line from "../Line/Line";
import Header from "../Header/Header";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";

function Profile(props) {
  const { handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser?.name);
  const [email, setEmail] = React.useState(currentUser?.email);

  React.useEffect(() => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
    handleChange(e);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handleChange(e);
  }

  function editProfile(e) {
    e.preventDefault();
    if (isValid) {
      MainApi.updateUser(name, email)
        .then((res) => {
          props.handleSuccess("Изменения успешно сохранены");
          resetForm();
        })
        .catch((result) => {
          result.json().then((err) => {
            props.handleError(err.message);
          });
        });
    }
  }
  function logOut() {
    props.onLogout();
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} colored={false} />
      <main className="profile">
        <h1 className="profile__hello">Привет, {name}!</h1>
        <form className="profile__form" onSubmit={editProfile} noValidate>
          <fieldset className="profile__input-container">
            <div className="profile__field">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                type="text"
                className={`profile__input ${
                  errors["name"] ? "profile__input_invalid" : ""
                }`}
                name="name"
                id="name"
                minLength="2"
                maxLength="30"
                required
                value={name || ""}
                error={errors["name"]}
                onChange={handleNameChange}
                pattern="[a-zA-ZА-Яа-яЁё \-]+"
              />
            </div>
            <span
              className={`profile__input-error ${
                errors["name"] ? "profile__input-error_active" : ""
              }`}
              name="name-error"
            >
              {errors["name"]}
            </span>
            <Line isGray={true} />
            <div className="profile__field">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>
              <input
                type={"email"}
                className={`profile__input ${
                  errors["email"] ? "profile__input_invalid" : ""
                }`}
                name="email"
                id="email"
                placeholder="mymail@mail.com"
                required
                value={email || ""}
                error={errors["email"]}
                onChange={handleEmailChange}
                pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$"
              />
            </div>
            <span
              className={`profile__input-error ${
                errors["email"] ? "profile__input-error_active" : ""
              }`}
              name="name-error"
            ></span>
          </fieldset>
          <button
            type="submit"
            className={`profile__submit ${
              isValid ? "" : "profile__submit_inactive"
            }`}
          >
            Редактировать
          </button>
        </form>
        <button type="button" className="profile__logout" onClick={logOut}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
