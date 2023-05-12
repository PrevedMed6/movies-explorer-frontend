import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Signin from "../Login/Login";
import Signup from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import MainApi from "../../utils/MainApi";

function App() {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const сheckToken = () => {
      MainApi.getMe()
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser(user.data);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    };
    сheckToken();
  }, [navigate, loggedIn]);

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleLogout() {
    setLoggedIn(false);
    navigate("/");
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} onLogout={handleLogout} />}
        />
        <Route
          path="/signin"
          element={<Signin loggedIn={loggedIn} onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Signup loggedIn={loggedIn} onLogin={handleLogin} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
