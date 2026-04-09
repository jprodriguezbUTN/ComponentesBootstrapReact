import React, { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import miGif from './maxwell-cat.gif';

const WelcomeModal = () => {
  const modalRef = useRef();

useEffect(() => {
    const modalElement = modalRef.current;
    const bsModal = new Modal(modalElement);
    bsModal.show();

    // FUNCIÓN DE LIMPIEZA (Cleanup)
    return () => {
      bsModal.hide();
      
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      // Devuelve el scroll al body
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    };
}, []);

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered"> {/* Añadí centrado vertical */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¡Bienvenido :D!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            {/*variable en el src entre llaves */}
            <img 
              src={miGif} 
              alt="Bienvenida" 
              className="img-fluid rounded mb-3" 
              style={{ maxHeight: '250px' }}
            />
            <p>Cuidado con volarse la pagina :P</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary w-100" data-bs-dismiss="modal">Empezar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;