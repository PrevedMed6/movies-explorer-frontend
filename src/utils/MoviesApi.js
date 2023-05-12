import { externalUrl } from "../utils/constants";

class MoviesApi {
  constructor(options) {
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Получить все фильмы
  getMovies() {
    return fetch(`${externalUrl}/beatfilm-movies`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}
const moviesApi = new MoviesApi({
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
