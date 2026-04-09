import React, { useState } from 'react';

function Progress({ titulo, tipo, url, color }) {
  const [valor, setValor] = useState(0);
  const [estado, setEstado] = useState('idlee');

  const manejarAccion = async () => {
    if (tipo === 'manual') {
      setValor(prev => Math.min(prev + 10, 100));
      return;
    }

    if (tipo === 'descarga') {
      setEstado('procesando');
      try {
        const res = await fetch(url);
        const reader = res.body.getReader();
        const total = +res.headers.get('Content-Length');
        let cargados = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          cargados += value.length;
          setValor(Math.round((cargados / total) * 100));
        }
        setEstado('finalizado');
      } catch (e) {
        setEstado('error');
      }
    }
  };

  const UI = {
    claseBarra: estado === 'error' ? 'bg-danger' : (valor === 100 ? 'bg-success' : color),
    etiqueta: tipo === 'manual' ? 'Incrementar' : (estado === 'procesando' ? 'Descargando...' : 'Iniciar Transmisión'),
    deshabilitado: estado === 'procesando' || (tipo === 'manual' && valor === 100)
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0 text-secondary">{titulo}</h6>
        <span className={`badge ${valor === 100 ? 'bg-success' : 'bg-dark'}`}>{valor}%</span>
      </div>

      <div className="progress mb-4" style={{ height: '12px', borderRadius: '10px' }}>
        <div 
          className={`progress-bar progress-bar-striped progress-bar-animated ${UI.claseBarra}`}
          style={{ width: `${valor}%`, transition: 'width 0.3s ease' }}
        ></div>
      </div>

      <div className="d-flex gap-2">
        <button 
          className={`btn flex-grow-1 fw-bold ${valor === 100 ? 'btn-success' : 'btn-dark'}`}
          onClick={manejarAccion}
          disabled={UI.deshabilitado}
        >
          {valor === 100 ? 'Completado' : UI.etiqueta}
        </button>

        {valor > 0 && estado !== 'procesando' && (
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => { setValor(0); setEstado('idlee'); }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default Progress;