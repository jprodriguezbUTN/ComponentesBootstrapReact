import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Imagenes from "../Components/Images";
import Select from "../Components/Select";

export default function PButton() {
  const [pokemonId, setPokemonId] = useState(1);
  const [dataJson, setDataJson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [agregados, setAgregados] = useState([]);
  const [inputPokemon, setInputPokemon] = useState("");

  const opciones = [
    {
      label: "Iniciales",
      options: [
        { value: "1", label: "Bulbasaur" },
        { value: "4", label: "Charmander" },
        { value: "7", label: "Squirtle" },
      ],
    },
    {
      label: "Populares",
      options: [
        { value: "25", label: "Pikachu" },
        { value: "39", label: "Jigglypuff" },
        { value: "150", label: "Mewtwo" },
      ],
    },
    {
      label: "Agregados",
      options: agregados,
    },
  ];

  useEffect(() => {
    if (!pokemonId) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (!response.ok) throw new Error("No existe ese Pokémon");

        const data = await response.json();
        setDataJson(data);
      } catch (err) {
        setError(err.message);
        setDataJson(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonId]);

  const handleChange = (e) => {
    setPokemonId(e.target.value);
  };

  const agregarDesdeInput = async () => {
    if (!inputPokemon) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`
      );

      if (!response.ok) {
        alert("Ese Pokémon no existe");
        return;
      }

      const data = await response.json();

      const nuevo = {
        value: data.id.toString(),
        label: data.name,
      };

      if (!agregados.find((p) => p.value === nuevo.value)) {
        setAgregados([...agregados, nuevo]);
      }

      setInputPokemon("");
    } catch {
      alert("Error al buscar Pokémon");
    }
  };

  const agregarDesdeSelect = () => {
    if (!dataJson) return;

    const nuevo = {
      value: dataJson.id.toString(),
      label: dataJson.name,
    };

    if (!agregados.find((p) => p.value === nuevo.value)) {
      setAgregados([...agregados, nuevo]);
    }
  };

  const eliminarPokemon = () => {
    const confirmar = window.confirm("¿Eliminar Pokémon seleccionado?");
    if (!confirmar) return;

    setAgregados(agregados.filter((p) => p.value !== pokemonId));

    if (dataJson && dataJson.id.toString() === pokemonId) {
      setDataJson(null);
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h1>Pokédex</h1>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Ingrese ID o nombre"
          value={inputPokemon}
          onChange={(e) => setInputPokemon(e.target.value)}
          className="form-control mb-2"
        />

        <Button texto="Agregar" color="success" onClick={agregarDesdeInput} />
      </div>

      <Select
        texto="Seleccione un Pokémon"
        opciones={opciones}
        onChange={handleChange}
      />

      <hr />

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {dataJson ? (
        <div>
          <h2 className="text-capitalize">{dataJson.name}</h2>

          <Imagenes
            url={dataJson.sprites.front_default}
            ancho="120px"
            alto="120px"
          />

          <p>Altura: {dataJson.height}</p>
          <p>Peso: {dataJson.weight}</p>

          <Button texto="Eliminar" color="danger" onClick={eliminarPokemon} />
        </div>
      ) : (
        <p>No hay Pokémon seleccionado</p>
      )}
    </div>
  );
}