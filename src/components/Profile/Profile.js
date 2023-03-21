import React from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Line/Line";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  function editProfile(e) {
    e.preventDefault();
  }
  function logOut() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header logedIn={true} colored={false} />
      <main className="profile">
        <h1 className="profile__hello">Привет, Евгения!</h1>
        <form className="profile__form">
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
          </fieldset>
          <button
            type="submit"
            className="profile__submit"
            onClick={editProfile}
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
