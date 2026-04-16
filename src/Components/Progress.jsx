import React from 'react';

/**
 * Componente Progress reutilizable
 *
 * @param {string}  label       - Texto descriptivo de la tarea
 * @param {number}  now         - Valor actual (0–100), controlado por el padre
 * @param {string}  color       - Variante Bootstrap: 'primary' | 'success' | 'warning' | 'danger' | 'info'
 * @param {boolean} striped     - Barra rayada
 * @param {boolean} animated    - Animación (solo funciona con striped=true)
 * @param {boolean} showPercent - Mostrar badge con porcentaje
 * @param {string}  sublabel    - Texto secundario debajo de la barra
 * @param {string}  size        - Altura: 'sm' | 'md' | 'lg'
 * @param {React.ReactNode} actions - Slot para botones opcionales debajo
 */
export default function Progress({
  label,
  now = 0,
  color = 'primary',
  striped = false,
  animated = false,
  showPercent = true,
  sublabel,
  size = 'md',
  actions,
}) {
  const heights = { sm: '6px', md: '12px', lg: '20px' };
  const resolvedColor = now === 100 ? 'success' : color;
  const badgeBg = now === 100 ? 'bg-success' : now === 0 ? 'bg-secondary' : `bg-${color}`;

  const barClasses = [
    'progress-bar',
    striped ? 'progress-bar-striped' : '',
    animated && now < 100 ? 'progress-bar-animated' : '',
    `bg-${resolvedColor}`,
  ].filter(Boolean).join(' ');

  return (
    <div className="mb-3">
      {(label || showPercent) && (
        <div className="d-flex justify-content-between align-items-center mb-1">
          {label && <span className="fw-semibold text-dark small">{label}</span>}
          {showPercent && (
            <span className={`badge rounded-pill ${badgeBg}`}>{now}%</span>
          )}
        </div>
      )}

      <div
        className="progress"
        style={{ height: heights[size], borderRadius: '8px' }}
      >
        <div
          className={barClasses}
          role="progressbar"
          style={{ width: `${now}%`, transition: 'width 0.3s ease' }}
          aria-valuenow={now}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {sublabel && (
        <small className="text-muted mt-1 d-block">{sublabel}</small>
      )}

      {actions && (
        <div className="mt-2 d-flex gap-2">{actions}</div>
      )}
    </div>
  );
}
