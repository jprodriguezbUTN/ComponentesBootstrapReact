import Imagenes from "./Images";

export default function Carousel({
  id = "carouselExample",
  imagenes = []
}) {
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Imagenes
              url={img.url}
              clases="d-block w-100"
              ancho={img.ancho}
              alto={img.alto}
              estilo={img.estilo}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}