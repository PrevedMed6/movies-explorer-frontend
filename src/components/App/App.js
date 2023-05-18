import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";
import Signin from "../Login/Login";
import Signup from "../Register/Register";
import Popup from "../Popup/Popup";
import ErrorText from "../ErrorText/ErrorText";
import PageNotFound from "../PageNotFound/PageNotFound";
import MainApi from "../../utils/MainApi";

function App() {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const [tockenChecked, setTockenChecked] = React.useState(false);
  const [formErrorText, setFormErrorText] = React.useState("");

  React.useEffect(() => {
    сheckToken();
  }, [loggedIn]);

  function сheckToken(additionalAction) {
    MainApi.getMe()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user.data);
        if (additionalAction) {
          additionalAction();
        }
      })
      .catch(() => {
        setLoggedIn(false);
        setCurrentUser({});
      })
      .finally(() => {
        setTockenChecked(true);
      });
  }
  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then(() => {
        сheckToken(() => navigate("/movies"));
      })
      .catch((result) => {
        result.json().then((err) => {
          setFormErrorText(err.message);
        });
      });
  }

  function handleLogout() {
    MainApi.logOut()
      .then((res) => {
        setLoggedIn(false);
        navigate("/");
        return res;
      })
      .catch((result) => {
        result.json().then((err) => {
          handleError(err.message);
        });
      });
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((result) => {
        result.json().then((err) => {
          setFormErrorText(err.message);
        });
      });
  }

  function hidePopup() {
    setPopupIsOpen(false);
    setErrorText("");
  }

  function handleError(message) {
    setErrorText(message);
    setPopupIsOpen(true);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Popup
        isOpen={popupIsOpen}
        onClose={hidePopup}
        component={ErrorText}
        message={errorText}
      />
      {tockenChecked ? (
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/movies"
            element={<ProtectedRoute loggedIn={loggedIn} component={Movies} />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} component={SavedMovies} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Profile}
                onLogout={handleLogout}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin onLogin={handleLogin} errorText={formErrorText} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                handleRegister={handleRegister}
                errorText={formErrorText}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        ""
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
