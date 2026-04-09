import React, { useState } from "react";

function Datalist({ opciones = [], titulo = "Selecciona una opción", id = "lista" }) {
  const [valor, setValor] = useState("");

  return (
    <div className="mt-4">
      <h5>{titulo}</h5>

      <input
        className="form-control"
        type="text"
        list={id}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe o selecciona..."
      />

      <datalist id={id}>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion} />
        ))}
      </datalist>

      <p className="mt-2">
        <strong>Seleccionaste:</strong> {valor}
      </p>
    </div>
  );
}

export default Datalist;