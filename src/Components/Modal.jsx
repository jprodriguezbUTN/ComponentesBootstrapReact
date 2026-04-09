import React from 'react';

function ModalComponente() {
  return (
    /* El modal permanece oculto hasta que el botón con data-target="#miModal" lo llame */
    <div className="modal fade" id="miModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Título del Modal</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Este contenido vive dentro de Modal.jsx</p>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponente;