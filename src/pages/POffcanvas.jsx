import { useState } from "react";
import Offcanvas from "../Components/Offcanvas";

export default function POffcanvas() {
  const [show, setShow] = useState(false);

  const abrir = () => setShow(true);
  const cerrar = () => setShow(false);

  return (
    <div className="container-fluid py-5 bg-light">
      <h1 className="mb-5 text-center">
        Offcanvas
      </h1>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg">
            
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                Ejemplo Offcanvas
              </h5>
            </div>

            <div className="card-body text-center">
              <button 
                className="btn btn-primary"
                onClick={abrir}
              >
                Enable body scrolling
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onClose={cerrar}
        title="Offcanvas with body scrolling"
      >
        <p>
          Sigue scrolleando el resto de la pagina para ver esta opcion en acccion.
        </p>
      </Offcanvas>
    </div>
  );
}