import React, { useState, useRef } from 'react';
import Progress from '../Components/Progress';

// ─── Caso 1: Subida de archivos ───────────────────────────────────────────────
function FileUploadDemo() {
  const [uploads, setUploads] = useState([]);
  const fileRef = useRef();

  const simulateUpload = (file) => {
    const id = Date.now() + Math.random();
    setUploads((prev) => [...prev, { id, name: file.name, now: 0, done: false }]);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploads((prev) =>
          prev.map((u) => (u.id === id ? { ...u, now: 100, done: true } : u))
        );
      } else {
        setUploads((prev) =>
          prev.map((u) => (u.id === id ? { ...u, now: progress } : u))
        );
      }
    }, 300);
  };

  const handleFiles = (e) => {
    Array.from(e.target.files).forEach(simulateUpload);
    e.target.value = '';
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 h-100">
      <h6 className="fw-bold mb-1">Subida de Archivos</h6>
      <p className="text-muted small mb-3">Seleccioná uno o varios archivos</p>

      <button
        className="btn btn-outline-primary btn-sm w-fit mb-3"
        onClick={() => fileRef.current.click()}
      >
        Seleccionar archivos
      </button>
      <input ref={fileRef} type="file" multiple hidden onChange={handleFiles} />

      {uploads.length === 0 && (
        <p className="text-muted small text-center py-3">No hay archivos en cola</p>
      )}

      {uploads.map((u) => (
        <Progress
          key={u.id}
          label={u.name}
          now={u.now}
          color="primary"
          striped
          animated={!u.done}
          size="sm"
          showPercent={false}
          sublabel={u.done ? 'Subida completa ✓' : `${u.now}% transferido`}
          actions={
            u.done && (
              <button
                className="btn btn-link btn-sm p-0 text-danger"
                onClick={() => setUploads((prev) => prev.filter((x) => x.id !== u.id))}
              >
                Eliminar
              </button>
            )
          }
        />
      ))}
    </div>
  );
}

// ─── Caso 2: Formulario multi-paso ───────────────────────────────────────────
const PASOS = ['Datos personales', 'Dirección', 'Cuenta', 'Confirmación'];

function WizardDemo() {
  const [paso, setPaso] = useState(0);
  const porcentaje = Math.round((paso / (PASOS.length - 1)) * 100);
  const esFinal = paso === PASOS.length - 1;

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 h-100">
      <h6 className="fw-bold mb-1">Formulario Multi-Paso</h6>
      <p className="text-muted small mb-3">
        Paso {paso + 1} de {PASOS.length}: <strong>{PASOS[paso]}</strong>
      </p>

      <Progress
        now={porcentaje}
        color="warning"
        sublabel={
          esFinal
            ? '¡Listo para enviar!'
            : `${PASOS.length - 1 - paso} paso(s) restante(s)`
        }
        size="md"
      />

      <ul className="list-unstyled mt-3 small">
        {PASOS.map((p, i) => (
          <li key={p} className={`mb-1 ${i > paso ? 'text-muted' : ''}`}>
            {i < paso ? '✅' : i === paso ? '🔵' : '⬜'} {p}
          </li>
        ))}
      </ul>

      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-outline-secondary btn-sm"
          disabled={paso === 0}
          onClick={() => setPaso((p) => p - 1)}
        >
          ← Atrás
        </button>
        <button
          className={`btn btn-sm ms-auto fw-bold ${esFinal ? 'btn-success' : 'btn-warning'}`}
          disabled={esFinal}
          onClick={() => setPaso((p) => p + 1)}
        >
          {esFinal ? 'Finalizado ✓' : 'Siguiente →'}
        </button>
      </div>
    </div>
  );
}

// ─── Caso 3: Completitud de perfil ───────────────────────────────────────────
const ITEMS_PERFIL = [
  { id: 'foto',  label: 'Foto de perfil',   puntos: 20 },
  { id: 'bio',   label: 'Biografía',         puntos: 15 },
  { id: 'email', label: 'Email verificado',  puntos: 25 },
  { id: 'tel',   label: 'Teléfono',          puntos: 20 },
  { id: 'addr',  label: 'Dirección',         puntos: 20 },
];

function ProfileCompletionDemo() {
  const [completados, setCompletados] = useState(new Set(['email']));

  const toggle = (id) =>
    setCompletados((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const porcentaje = ITEMS_PERFIL
    .filter((i) => completados.has(i.id))
    .reduce((acc, i) => acc + i.puntos, 0);

  const colorBarra =
    porcentaje < 40 ? 'danger' : porcentaje < 80 ? 'warning' : 'success';

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 h-100">
      <h6 className="fw-bold mb-1">Perfil</h6>
      <p className="text-muted small mb-3">Completá tu perfil para mejorar tu experiencia</p>

      <Progress
        label="Perfil completado"
        now={porcentaje}
        color={colorBarra}
        size="lg"
        sublabel={porcentaje === 100 ? '¡Perfil completo!' : `Te faltan ${100 - porcentaje} puntos`}
      />

      <ul className="list-unstyled mt-2 small">
        {ITEMS_PERFIL.map((item) => (
          <li key={item.id} className="py-1 border-bottom d-flex align-items-center gap-2">
            <input
              type="checkbox"
              id={`perfil-${item.id}`}
              className="form-check-input m-0"
              checked={completados.has(item.id)}
              onChange={() => toggle(item.id)}
            />
            <label htmlFor={`perfil-${item.id}`} className="flex-grow-1 mb-0">
              {item.label}
            </label>
            <span className="badge bg-secondary rounded-pill">+{item.puntos}pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Caso 4: Instalación de paquetes ─────────────────────────────────────────
const DEPS = ['react', 'react-dom', 'react-router-dom', 'axios', 'bootstrap', 'maxwell-cat.gif' ];

function InstallDemo() {
  const [running, setRunning] = useState(false);
  const [progreso, setProgreso] = useState({});

  const instalar = async () => {
    setRunning(true);
    setProgreso({});

    for (const dep of DEPS) {
      setProgreso((p) => ({ ...p, [dep]: 0 }));
      await new Promise((res) => {
        let val = 0;
        const iv = setInterval(() => {
          val += Math.floor(Math.random() * 30) + 10;
          if (val >= 100) {
            val = 100;
            clearInterval(iv);
            setProgreso((p) => ({ ...p, [dep]: 100 }));
            res();
          } else {
            setProgreso((p) => ({ ...p, [dep]: val }));
          }
        }, 150);
      });
    }
    setRunning(false);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 h-100">
      <h6 className="fw-bold mb-1">Instalación de Paquetes</h6>
      <p className="text-muted small mb-3">
        Simula <code>npm install</code> con progreso por paquete
      </p>

      {DEPS.map((dep) => (
        <Progress
          key={dep}
          label={dep}
          now={progreso[dep] ?? 0}
          color="info"
          striped
          animated={progreso[dep] > 0 && progreso[dep] < 100}
          size="sm"
          showPercent={false}
          sublabel={
            progreso[dep] === undefined
              ? 'En espera...'
              : progreso[dep] === 100
              ? 'Instalado ✓'
              : `${progreso[dep]}%`
          }
        />
      ))}

      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-dark btn-sm fw-bold"
          onClick={instalar}
          disabled={running}
        >
          {running ? 'Instalando...' : '▶ Instalar todo'}
        </button>
        {!running && Object.keys(progreso).length > 0 && (
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setProgreso({})}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export default function PProgress() {
  return (
    <main className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Componente Progress</h1>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <FileUploadDemo />
          </div>
          <div className="col-12 col-md-6">
            <WizardDemo />
          </div>
          <div className="col-12 col-md-6">
            <ProfileCompletionDemo />
          </div>
          <div className="col-12 col-md-6">
            <InstallDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
