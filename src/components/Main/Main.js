import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main() {
  return (
    <>
      <Header logedIn={true} colored={true} />
      <main className="main">
        <Promo />
      </main>
      <Footer />
    </>
  );
}

export default Main;
