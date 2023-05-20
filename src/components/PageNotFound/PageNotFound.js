import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="page-not-found">
      <p className="page-not-found__error-code">404</p>
      <p className="page-not-found__error-message">Страница не найдена</p>
      <button className="page-not-found__nav-link" onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;
