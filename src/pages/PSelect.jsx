import { useState } from "react";
import Select from "../Components/Select";

const opciones = [
  {
    label: "Frutas",
    options: [
      { value: "manzana", label: "Manzana" },
      { value: "banana", label: "Banana" },
      { value: "cereza", label: "Cereza" }
    ]
  },
  {
    label: "Verduras",
    options: [
      { value: "zanahoria", label: "Zanahoria" },
      { value: "lechuga", label: "Lechuga" },
      { value: "pimiento", label: "Pimiento" }
    ]
  }
];

export default function PSelect() {
  const [seleccion, setSeleccion] = useState("");

  function handleSelectChange(event) {
    setSeleccion(event.target.value);
  }

  function getEtiquetaSeleccionada() {
    const item = opciones
      .flatMap((grupo) => grupo.options)
      .find((opcion) => opcion.value === seleccion);

    return item ? item.label : "Ninguna opción seleccionada";
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ejemplo de Select con funciones</h1>
      <p className="mb-4">
        Usa el componente <strong>Select</strong> y una función para actualizar el estado cuando cambia la opción.
      </p>

      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="mb-4">
                <label htmlFor="demoSelect" className="form-label">
                  Elige una categoría:
                </label>
                <Select
                  id="demoSelect"
                  name="demoSelect"
                  texto="Selecciona una opción"
                  opciones={opciones}
                  value={seleccion}
                  onChange={handleSelectChange}
                />
              </div>

              <div className="alert alert-primary">
                <strong>Seleccionado:</strong> {getEtiquetaSeleccionada()}
              </div>

              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setSeleccion("manzana")}
                >
                  Seleccionar Manzana
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setSeleccion("zanahoria")}
                >
                  Seleccionar Zanahoria
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setSeleccion("")}
                >
                  Limpiar selección
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
