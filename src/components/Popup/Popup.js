import "./Popup.css";

function Popup({ component: Comp, ...props }) {
  function handleClose(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }
  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""} ${
        props.isMenu ? "popup_is-menu" : ""
      }`}
      aria-label="Навигация по сайту"
      onClick={handleClose}
    >
      <div
        className={`popup__container ${
          props.isMenu ? "popup__container_is-menu" : ""
        }`}
      >
        <button
          type="button"
          className="popup__close"
          onClick={handleClose}
        ></button>
        <Comp {...props} />
      </div>
    </section>
  );
}

export default Popup;
