import "./PageNotFound.css";

function PageNotFound() {
  return (
    <main className="page-not-found">
      <p className="page-not-found__error-code">404</p>
      <p className="page-not-found__error-message">Страница не найдена</p>
      <a className="page-not-found__nav-link" href="/">
        Назад
      </a>
    </main>
  );
}

export default PageNotFound;
