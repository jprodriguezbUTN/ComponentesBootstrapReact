import React, { useEffect, useState } from "react";
import Datalist from "../Components/Datalist";
import CTable from "../Components/CTable";

export default function PPokemonTable() {
  const [pokemones, setPokemones] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await response.json();

        setPokemones(data.results.map(p => p.name));

        const detalles = await Promise.all(
          data.results.map(p => fetch(p.url).then(res => res.json()))
        );

        const filas = detalles.map(p => [
          p.id,
          p.name,
          p.height,
          p.weight,
          p.types.map(t => t.type.name).join(", ")
        ]);

        setRows(filas);

      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPokemons();
  }, []);

  const columns = ["#", "Nombre", "Altura", "Peso", "Tipo"];

  return (
    <div className="container mt-4">
      <h1>Lista de Pokémon</h1>

      <Datalist
        titulo="Lista de Pokémon"
        opciones={pokemones}
        id="pokemon"
      />

      <hr />

      <CTable
        title="Pokémon cargados desde API"
        columns={columns}
        rows={rows}
      />
    </div>
  );
}