import { useState } from "react";

export default function Collapse({
  Texto = "Mostrar contenido",
  TextoEsconder = "Ocultar contenido",
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="btn btn-primary w-100 mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? TextoEsconder : Texto}
      </button>

      <div className={`collapse ${isOpen ? "show" : ""}`}>
        <div className="card card-body">
          {children || (
            <p className="text-muted mb-0">No se ha pasado contenido.</p>
          )}
        </div>
      </div>
    </div>
  );
}
