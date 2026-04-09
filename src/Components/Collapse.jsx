/* clases por tipo del collapse 
"min-height: 120px;" "width: 300px;"
Multiple toggles and targets
data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
<div class="collapse multi-collapse" id="multiCollapseExample1"> <div class="collapse multi-collapse" id="multiCollapseExample2"> 
texto, color, tamano <Imagenes url={url} */
import { useState } from 'react';

export default function Collapse(Texto, AlturaTexto, AnchuraTexto,Colapsado ,MultiCollapso,children){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5">
      <h5 className="mb-3 text-center">Componente Collapse (Bootstrap en React)</h5>
      
      <button 
        className="btn btn-primary w-100 mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Ocultar contenido ▲" : "Mostrar contenido ▼"}
      </button>
      
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <div className="card card-body">
          <p className="mb-0">
            Este es el contenido que se colapsa y se expande. 
            Puedes poner aquí texto, imágenes, listas u otros componentes.
          </p>
          <hr />
          <p className="text-muted small mb-0">
            Hecho con <strong>useState</strong> y las clases de Bootstrap.
          </p>
        </div>
      </div>
    </div>
  );
}