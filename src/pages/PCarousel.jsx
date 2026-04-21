{/*import Carousel from "../Components/Carrousel";
import Imagenes from "../Components/Images";

export default function PCarousel() {
  return (
    <div className="container mt-4">

      <h3>Carousel</h3>

      <Carousel tiempo={2000}>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2023/07/28/11/45/landscapes-8155111_1280.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2020/03/15/13/15/desert-4933581_1280.jpg" />
        </div>

        <div className="carousel-item">
          <Imagenes url="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg" />
        </div>

      </Carousel>

    </div>
  );
*/}
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from "../Components/Carrousel";
import Imagenes from "../Components/Images";

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
        let url = "https://pokeapi.co/api/v2/pokemon/3";
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
                <div className="container mt-4">
                  <Carousel tiempo={2000}>
                    <div className="carousel-item">
                      <Imagenes url={dataJson.sprites.front_default} />
                    </div>

                    <div className="carousel-item">
                      <Imagenes url={dataJson.sprites.back_default} />
                    </div>

                    <div className="carousel-item">
                      <Imagenes url={dataJson.sprites.front_shiny} />
                    </div>

                    <div className="carousel-item">
                      <Imagenes url={dataJson.sprites.back_shiny} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
