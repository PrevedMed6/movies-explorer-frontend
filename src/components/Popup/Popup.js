import "./Popup.css";

function Popup({ component: Comp, ...props }) {
  function handleClose(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
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
        <Comp {...props}/>
      </div>
    </section>
  );
}

export default Popup;
