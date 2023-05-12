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
}

const mainApi = new MainApi({
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
