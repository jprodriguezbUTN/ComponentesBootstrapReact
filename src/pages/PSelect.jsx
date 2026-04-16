import { useState, useEffect } from "react";
import Select from "../Components/Select";

export default function PPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selected, setSelected] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await res.json();
        setPokemonList([
          {
            label: "Pokémon",
            options: data.results.map((p) => ({
              value: p.name,
              label: p.name,
            })),
          },
        ]);
      } catch (err) {
        setError("Error cargando lista");
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);
  useEffect(() => {
    if (!selected) return;
    const fetchPokemon = async () => {
      setLoadingDetail(true);
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${selected}`
        );
        const data = await res.json();
        setPokemonData(data);
      } catch (err) {
        setError("Error cargando Pokémon");
      } finally {
        setLoadingDetail(false);
      }
    };
    fetchPokemon();
  }, [selected]);
  return (
    <div className="container mt-5">
      <h1>Pokédex</h1>
      {loading && <p>Cargando lista...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && (
        <Select
          texto="Selecciona un Pokémon"
          opciones={pokemonList}
          onChange={(e) => setSelected(e.target.value)}
        />
      )}
      {loadingDetail && <p>Cargando Pokémon</p>}
      {pokemonData && (
        <div className="card mt-4 p-3" style={{ maxWidth: "300px" }}>
          <h3 className="text-capitalize">{pokemonData.name}</h3>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            width="150"
          />
          <p>Altura: {pokemonData.height}</p>
          <p>Peso: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
}