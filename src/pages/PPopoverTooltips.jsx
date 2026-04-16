import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Popover from "../Components/PopOvers.jsx";
import Button from "../Components/Button.jsx";
import Tooltip from "../Components/ToolTips.jsx";
export default function PPokemon() {
  const { id } = useParams();
  const [dataJson, setDataJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setDataJson(null);

      try {
        let url = "https://pokeapi.co/api/v2/pokemon/445";
        if (id) {
          url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        setDataJson(data);
        console.log('Datos descargados:', data);
      } catch (err) {
        setError(err.message || 'Error al obtener los datos');
        setDataJson(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mt-5 pb-5">
      <div className="row mb-5">
        <div className="col-md-10 mx-auto">
          <h1 className="display-5 mb-4">
            <i className="bi bi-fire"></i> Pokedex API
            <span className="badge bg-danger ms-3">JSON</span>
          </h1>
        </div>
      </div>

      {loading && (
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="alert alert-info">
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Cargando datos...
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="alert alert-danger">
              Error: {error}
            </div>
          </div>
        </div>
      )}

      {dataJson && (
  <div className="text-center mt-4">

    <Tooltip
      text={`Quien es este Pokemon? ${dataJson.name} | Tipo: ${dataJson.types.map(tipo => tipo.type.name).join(", ")}`}
    >
      <img
        src={dataJson.sprites.front_default}
        alt={dataJson.name}
        width="120"
        style={{ cursor: "pointer" }}
      />
    </Tooltip>

    {/* 🔹 Botón con Popover */}
    <Popover
      title={"Pokemon: " + dataJson.name}
      placement="right"
      content={
        <>
        <img
        src={dataJson.sprites.front_default}
        alt={dataJson.name}
        width="120"
        style={{ cursor: "pointer" }}
      />
          <p>ID: {dataJson.id}</p>
          <p>Altura: {dataJson.height * 10} cm</p>
          <p>Peso: {dataJson.weight / 10} kg</p>

          <p>
            Tipo: {dataJson.types.map(tipo => tipo.type.name).join(", ")}
          </p>
        </>
      }
    >
      <Button texto="Ver Pokemon" color="success" tamano="lg" />
    </Popover>

  </div>
)}

    </div>
  );
}
