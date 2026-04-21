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
    <div ref={contenedorRef} style={{
      position: "relative",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto"
    }}>

      {/* CONTENIDO */}
      <div style={{
        position: "relative",
        width: "100%"
      }}>
        {children}
      </div>

      {/* BOTÓN ANTERIOR */}
      <button 
        onClick={anterior}
        style={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)",
          border: "none",
          color: "white",
          fontSize: "24px",
          padding: "10px 14px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => e.target.style.background = "rgba(0, 0, 0, 0.7)"}
        onMouseLeave={(e) => e.target.style.background = "rgba(0, 0, 0, 0.4)"}
      >
        &lt;
      </button>

      {/* BOTÓN SIGUIENTE */}
      <button 
        onClick={siguiente}
        style={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)",
          border: "none",
          color: "white",
          fontSize: "24px",
          padding: "10px 14px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => e.target.style.background = "rgba(0, 0, 0, 0.7)"}
        onMouseLeave={(e) => e.target.style.background = "rgba(0, 0, 0, 0.4)"}
      >
        &gt;
      </button>

    </div>
  );
}