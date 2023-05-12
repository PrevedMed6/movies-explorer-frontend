import React from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Line/Line";
import Header from "../Header/Header";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/validation";

function Profile() {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  function editProfile(e) {
    e.preventDefault();
    if (isValid) {
      alert("Типа сохранили");
      resetForm();
    }
  }
  function logOut() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="profile">
        <h1 className="profile__hello">Привет, Евгения!</h1>
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
                value={values["name"]||""}
                error={errors["name"]}
                onChange={handleChange}
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
                value={values["email"]||""}
                error={errors["email"]}
                onChange={handleChange}
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
