import { useState, useEffect } from 'react';
import { data, useParams } from 'react-router-dom';
import Image from "../Components/Images";
import ScrollSpy from "../Components/ScrollSpy";

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
        let url = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
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
                  <nav id='pokeNav'className="navbar navbar-light bg-light px-3 mt-3">
                  <ul className="nav nav-pills">
    
                    <li className="nav-item">
                      <a className="nav-link" href="#p1">{dataJson.results[0].name}</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#p2">{dataJson.results[1].name}</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#p3">{dataJson.results[2].name}</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#p4">{dataJson.results[3].name}</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#p5">{dataJson.results[4].name}</a>
                    </li>

                  </ul>
                  </nav>

                  <ScrollSpy target="pokeNav" height='400px'>

                    <h4 id='p1'>{dataJson.results[0].name}</h4>

                  

                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>

                  <h4 id='p2'>{dataJson.results[1].name}</h4>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>

                  <h4 id='p3'>{dataJson.results[2].name}</h4>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>

                  <h4 id='p4'>{dataJson.results[3].name}</h4>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>

                  <h4 id='p5'>{dataJson.results[4].name}</h4>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>
                  <p>Prueba</p>

                  </ScrollSpy>   
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
