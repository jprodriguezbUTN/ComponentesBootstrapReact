import { useState } from 'react';

export default function PCollapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          
          <h2 className="text-center mb-4">Componente Collapse</h2>
          <p className="text-center text-muted mb-5">
            El componente Collapse permite mostrar y ocultar contenido de forma animada.
          </p>

          <div className="text-center mb-4">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Ocultar contenido ▲" : "Mostrar contenido ▼"}
            </button>
          </div>

          <div className={`collapse ${isOpen ? 'show' : ''}`}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">¡Contenido colapsable!</h5>
                <p className="card-text">
                  Este es un ejemplo del componente Collapse de Bootstrap implementado en React.
                  Utilizamos el hook <code>useState</code> para controlar el estado de visibilidad.
                </p>
                
                <h6>Características:</h6>
                <ul>
                  <li>Animación suave al expandir / contraer</li>
                  <li>Control total con React (useState)</li>
                  <li>Fácil de personalizar</li>
                  <li>Compatible con Bootstrap 5</li>
                </ul>

                <p className="text-muted small">
                  Puedes poner aquí cualquier contenido: texto, imágenes, formularios, tablas, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-muted small">
              Este componente fue creado siguiendo el estilo de los demás componentes del proyecto.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}