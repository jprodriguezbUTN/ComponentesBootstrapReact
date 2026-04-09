import Buttons from "../Components/Buttons";

export default function Offcanvas({ show, onClose, title, children }) {
  return (
    <div
      className={`offcanvas offcanvas-start ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <Buttons>
          texto="Cerrar"
          color="secundary"
          tamano=""
          onClick={onClose}
        </Buttons>
      </div>

      <div className="offcanvas-body">
        {children}
      </div>
    </div>
  );
}