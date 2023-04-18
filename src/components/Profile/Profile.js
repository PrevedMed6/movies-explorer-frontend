import React from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Line/Line";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  function editProfile(e) {
    e.preventDefault();
    alert('Типа сохранили');
  }
  function logOut() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="profile">
        <h1 className="profile__hello">Привет, Евгения!</h1>
        <form className="profile__form" onSubmit={editProfile}>
          <fieldset className="profile__input-container">
            <div className="profile__field">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                type="text"
                className="profile__input"
                name="name"
                id="name"
                minLength="2"
                maxLength="30"
                required
                defaultValue="Евгения"
              />
            </div>
            <span className="profile__input-error" name="name-error"></span>
            <Line isGray={true} />
            <div className="profile__field">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>
              <input
                type={"email"}
                className="profile__input"
                name="email"
                id="email"
                defaultValue="mymail@mail.com"
                placeholder="mymail@mail.com"
                required
              />
            </div>
            <span className="profile__input-error" name="name-error"></span>
          </fieldset>
          <button
            type="submit"
            className="profile__submit"
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
