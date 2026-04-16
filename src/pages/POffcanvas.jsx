import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Offcanvas from '../Components/Offcanvas';

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
        let url = "https://pokeapi.co/api/v2/pokemon/mewtwo";
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
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">📋 Datos JSON {id && `- ${id}`}</h5>
              </div>
              <div className="card-body">
                <div style={{
                  backgroundColor: '#1e1e1e',
                  color: '#d4d4d4',
                  padding: '15px',
                  borderRadius: '6px',
                  overflow: 'auto',
                  maxHeight: '600px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  lineHeight: '1.5'
                }}>

                  <div
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasScrolling"
>
  <button className="btn btn-warning mb-3">
    Ver Pokémon
  </button>
</div>

<Offcanvas title={dataJson.name}>
  <div className="text-center">
    <img 
      src={dataJson.sprites.front_default} 
      alt={dataJson.name}
      className="img-fluid mb-3"
    />

    <h4 className="text-capitalize">{dataJson.name}</h4>

    <p><strong>ID:</strong> {dataJson.id}</p>

    <p>
      <strong>Tipos:</strong>{" "}
      {dataJson.types.map((t, i) => (
        <span key={i} className="badge bg-primary me-1">
          {t.type.name}
        </span>
      ))}
    </p>
  </div>
</Offcanvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}