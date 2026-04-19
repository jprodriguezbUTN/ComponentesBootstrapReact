import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';
import Imagenes from '../Components/Images';
import Button from '../Components/Button';

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
        let url = "https://pokeapi.co/api/v2/pokemon/25  ";
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
                  color: '#d4d4d4',
                  padding: '15px',
                  borderRadius: '6px',
                  overflow: 'auto',
                  maxHeight: '600px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  lineHeight: '1.5'
                }}>
                  
                  <Card bg="amarillo" colorTexto="negro"
                    header={dataJson.name.toUpperCase()}
                    titulo={dataJson.abilities[0].ability.name.toUpperCase()}
                    texto={dataJson.base_experience}
                    footer={dataJson.types[0].type.name.toUpperCase()}>
                    <Imagenes url={dataJson.sprites.front_default}></Imagenes>
                  </Card> 

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}