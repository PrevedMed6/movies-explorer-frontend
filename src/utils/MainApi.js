import { serverUrl } from "../utils/constants";

class MainApi {
  constructor(options) {
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  //Зарегистрировать пользователя
  register(name, email, password) {
    return fetch(`${serverUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  login(email, password) {
    return fetch(`${serverUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  logOut() {
    return fetch(`${serverUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getMe() {
    return fetch(`${serverUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //Обновить данные о пользователе
  updateUser(name, email) {
    return fetch(`${serverUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //Сохранить фильм
  saveMovie(card) {
    return fetch(`${serverUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image,
        trailerLink: card.trailerLink,
        thumbnail: card.thumbnail,
        owner: card.owner,
        movieId: card.movieId,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //Удалить фильм
  deleteMovie(filmID) {
    return fetch(`${serverUrl}/movies/${filmID}`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //Получить сохраненные фильмы
  getSavedMovies(userID){
    return fetch(`${serverUrl}/movies`, {
      credentials: "include",
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

const mainApi = new MainApi({
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
