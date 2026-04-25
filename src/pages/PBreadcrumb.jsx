import { useEffect, useState } from "react";

export default function PPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  // Función para obtener ID desde la URL
  function getIdFromUrl(url) {
    const partes = url.split("/");
    return partes[partes.length - 2];
  }

  return (
    <div>

      {/* 🔥 Navbar */}
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand">
            Pokédex con Bootstrap
          </span>
        </div>
      </nav>

      <div className="container">
        <h2 className="mb-4">Lista de Pokémon</h2>

        <div className="row">
          {pokemons.map((pokemon) => {
            const id = getIdFromUrl(pokemon.url);
            const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return (
              <div key={pokemon.name} className="col-6 col-md-3 mb-4">
                <div className="card text-center shadow-sm">

                  {/* 🖼 Imagen */}
                  <img
                    src={imagen}
                    alt={pokemon.name}
                    className="card-img-top p-3"
                  />

                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {pokemon.name}
                    </h5>

                    {/* 🔘 Botón */}
                    <button className="btn btn-primary">
                      Ver detalles
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}