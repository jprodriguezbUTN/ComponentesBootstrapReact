import { useEffect, useRef } from "react";
import Imagenes from "./Images";
import Botones from "./Button";

export default function Carousel({
  tiempo = 3000,
  children
}) {
  const contenedorRef = useRef(null);
  const indiceRef = useRef(0);

  const mostrarSlide = (nuevoIndice) => {
    const slides = contenedorRef.current.querySelectorAll(".carousel-item");

    slides.forEach((slide, index) => {
      slide.style.display = index === nuevoIndice ? "block" : "none";
    });

    indiceRef.current = nuevoIndice;
  };

  const siguiente = () => {
    const slides = contenedorRef.current.querySelectorAll(".carousel-item");
    const nuevoIndice =
      indiceRef.current === slides.length - 1 ? 0 : indiceRef.current + 1;

    mostrarSlide(nuevoIndice);
  };

  const anterior = () => {
    const slides = contenedorRef.current.querySelectorAll(".carousel-item");
    const nuevoIndice =
      indiceRef.current === 0 ? slides.length - 1 : indiceRef.current - 1;

    mostrarSlide(nuevoIndice);
  };

  useEffect(() => {
    const slides = contenedorRef.current.querySelectorAll(".carousel-item");

    if (slides.length > 0) {
      mostrarSlide(0);
    }

    const intervalo = setInterval(() => {
      siguiente();
    }, tiempo);

    return () => clearInterval(intervalo);
  }, [tiempo]);

  return (
    <div ref={contenedorRef}>

      {/* CONTENIDO */}
      <div>
        {children}
      </div>

      {/* BOTONES */}
      <div>
        <Botones texto="Anterior" onClick={anterior} />
        <Botones texto="Siguiente" onClick={siguiente} />
      </div>

    </div>
  );
}