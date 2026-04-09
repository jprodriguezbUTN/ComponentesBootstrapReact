import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="p-5">
      <button 
        type="button" 
        className="btn btn-primary" 
        data-toggle="modal" 
        data-target="#miModal"
      >
        Abrir Modal
      </button>

      <div className="modal fade" id="miModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Título</h5>
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Hola Mundo.</p>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;