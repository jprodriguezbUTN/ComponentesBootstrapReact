import React from "react";
import Datalist from "../Components/Datalist";

export default function PDatalist() {
  return (
    <div className="container mt-4">
      <h1>Ejemplo de Datalist en React</h1>
      <p>Componente reutilizable con props</p>

      <hr />

      {/* Datalist de lenguajes */}
      <Datalist
        titulo="Lenguajes de Programación"
        opciones={["JavaScript", "Python", "Java", "C#", "C++"]}
        id="lenguajes"
      />

      {/* Datalist de frutas */}
      <Datalist
        titulo="Frutas"
        opciones={["Manzana", "Banano", "Uva", "Piña", "Mango"]}
        id="frutas"
      />

    </div>
  );
}