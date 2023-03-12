import Navigation from "../Navigation/Navigation";
import "./Popup.css";

function Popup(props) {
  function handleClose(e) {
    if (e.target === e.currentTarget) {
      // props.onClose();
    }
  }
  return (
    <section
      className={props.isOpen ? `popup popup_opened` : `popup`}
      aria-label="Навигация по сайту"
      onClick={handleClose}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={handleClose}
        ></button>
        <Navigation links={props.links} vertical={true}/>
      </div>
    </section>
  );
}

export default Popup;
