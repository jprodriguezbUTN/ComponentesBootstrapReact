import React, { useState } from "react";

function Datalist() {
  const [valor, setValor] = useState("");

  const opciones = ["Manzana", "Banano", "Uva", "Piña", "Mango"];

  return (
    <div>
      <h2>Selecciona una fruta</h2>

      <input
        type="text"
        list="frutas"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe una fruta..."
      />

      <datalist id="frutas">
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion} />
        ))}
      </datalist>

      <p>Seleccionaste: {valor}</p>
    </div>
  );
}

export default Datalist;