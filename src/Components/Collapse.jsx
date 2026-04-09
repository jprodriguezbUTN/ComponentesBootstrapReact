import { useState } from 'react';

export default function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <h5 className="mb-3">Componente Collapse - Bootstrap en React</h5>
      
      <button 
        className="btn btn-primary mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Ocultar contenido' : 'Mostrar contenido'}
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