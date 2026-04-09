import React, { useState } from 'react';

function Progress() {
  const [progreso, setProgreso] = useState(20);

  const ajustarProgreso = (valor) => {
    setProgreso((prev) => {
      const nuevoValor = prev + valor;
      return Math.min(Math.max(nuevoValor, 0), 100);
    });
  };

  const getVariant = () => {
    if (progreso < 30) return "bg-danger";
    if (progreso < 70) return "bg-primary";
    return "bg-success";
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card shadow-lg border-0" style={{ width: '400px', borderRadius: '15px' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h4 className="fw-bold text-secondary">Estado del Sistema</h4>
            <p className="text-muted small">Gestión de recursos en tiempo real</p>
          </div>

          {/* Barra de progreso usando HTML/Bootstrap nativo */}
          <div className="progress shadow-sm mb-4" style={{ height: '25px', borderRadius: '50px' }}>
            <div 
              className={`progress-bar progress-bar-animated progress-bar-striped ${getVariant()}`} 
              role="progressbar" 
              style={{ width: `${progreso}%` }} 
              aria-valuenow={progreso} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="fw-bold fs-4 text-dark">{progreso}%</span>
            <span className={`badge ${progreso === 100 ? 'bg-success' : 'bg-light text-dark border'}`}>
              {progreso === 100 ? 'Completado' : 'En proceso'}
            </span>
          </div>

          {/* Contenedor de botones (reemplaza a Stack) */}
          <div className="d-flex gap-2">
            <button 
              type="button"
              className="btn btn-outline-danger w-100 fw-semibold"
              onClick={() => ajustarProgreso(-10)}
              disabled={progreso === 0}
            >
              − Reducir
            </button>
            <button 
              type="button"
              className="btn btn-primary w-100 fw-semibold shadow-sm"
              onClick={() => ajustarProgreso(10)}
              disabled={progreso === 100}
            >
              + Aumentar
            </button>
          </div>

          <button 
            type="button"
            className="btn btn-link w-100 mt-3 text-decoration-none text-muted small"
            onClick={() => setProgreso(0)}
          >
            Reiniciar valores
          </button>
        </div>
      </div>
    </div>
  );
}

export default Progress;