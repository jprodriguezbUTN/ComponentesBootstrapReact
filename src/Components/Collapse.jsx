import { useState } from "react";

export default function Collapse(
  Texto,
  AlturaTexto = "300px",
  AnchuraTexto = "100%",
  Colapsado = true,
  MultiCollapso = false,
  children
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5">
      <h5 className="mb-3 text-center">
        Componente Collapse (Bootstrap en React)
      </h5>

      <button
        className="btn btn-primary w-100 mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Ocultar contenido ▲" : "Mostrar contenido ▼"}
      </button>

      <div
        className={`collapse ${isOpen ? "show" : ""}`}
        style={{
          maxHeight: AlturaTexto || "none",
          width: AnchuraTexto || "100%",
        }}
      >
        <div className="card card-body">
          {children || (
            <p className="mb-0">
              Este es el contenido que se colapsa y se expande. Puedes poner
              aquí texto, imágenes, listas u otros componentes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
