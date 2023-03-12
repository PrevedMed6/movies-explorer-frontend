import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header logedIn={true} colored={true}/>
      страничка тут
      <Footer />
    </>
  );
}

export default Main;
