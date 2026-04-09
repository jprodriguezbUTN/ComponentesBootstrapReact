import React, { useState } from "react";
import Spinner from "../Components/Snipper";

export default function PSpinner() {
  const [loginLoading, setLoginLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleLogin = () => {
    setLoginLoading(true);
    setTimeout(() => setLoginLoading(false), 2000);
  };

  const handleSubmit = () => {
    setSubmitLoading(true);
    setTimeout(() => setSubmitLoading(false), 2000);
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <h1 className="mb-5 text-center">
        <i className="bi bi-arrow-repeat"></i> Ejemplos de uso Spinner
      </h1>

      <div className="row g-4">
        {/* Ejemplo 1: Login */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-box-arrow-in-right"></i> Formulario de Login
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="correo@ejemplo.com"
                    disabled={loginLoading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="••••••••"
                    disabled={loginLoading}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={loginLoading}
                >
                  {loginLoading ? (
                    <>
                      <Spinner 
                        type="border" 
                        color="light" 
                        size="sm" 
                        className="me-2"
                      />
                      Iniciando sesión...
                    </>
                  ) : (
                    "Iniciar Sesión"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Ejemplo 2: Cargar Datos */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">
                <i className="bi bi-cloud-download"></i> Cargando Datos
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center py-5">
                <Spinner 
                  type="grow" 
                  color="info" 
                  label="Cargando datos..."
                  as="div"
                />
                <p className="mt-3 text-muted">Obteniendo información del servidor...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 3: Formulario de Registro */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-person-plus"></i> Formulario de Registro
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="mb-3">
                  <label className="form-label">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Juan Pérez"
                    disabled={submitLoading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="juan@ejemplo.com"
                    disabled={submitLoading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="••••••••"
                    disabled={submitLoading}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-success w-100"
                  disabled={submitLoading}
                >
                  {submitLoading ? (
                    <>
                      <Spinner 
                        type="border" 
                        color="light" 
                        size="sm" 
                        className="me-2"
                      />
                      Creando cuenta...
                    </>
                  ) : (
                    "Registrarse"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Ejemplo 4: Procesando Pago */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">
                <i className="bi bi-credit-card"></i> Procesando Pago
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center py-5">
                <Spinner 
                  type="border" 
                  color="warning" 
                  label="Procesando pago..."
                  as="div"
                />
                <p className="mt-3 text-muted">Por favor espera mientras procesamos tu pago...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo 5: En Tabla */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">
                <i className="bi bi-table"></i> Tabla con Carga
              </h5>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Producto A</td>
                    <td>
                      <Spinner type="border" color="primary" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Producto B</td>
                    <td>
                      <span className="badge bg-success">Activo</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Ejemplo 6: Estados de Carga */}
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0">
                <i className="bi bi-lightning"></i> Diferentes Estados
              </h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <small className="text-muted d-block mb-2">Pequeño:</small>
                <button className="btn btn-sm btn-secondary" disabled>
                  <Spinner type="border" size="sm" className="me-2" />
                  Guardando...
                </button>
              </div>
              <div className="mb-3">
                <small className="text-muted d-block mb-2">Normal:</small>
                <button className="btn btn-secondary" disabled>
                  <Spinner type="grow" className="me-2" />
                  Procesando...
                </button>
              </div>
              <div>
                <small className="text-muted d-block mb-2">Colores:</small>
                <button className="btn btn-success btn-sm me-2" disabled>
                  <Spinner type="border" color="light" size="sm" className="me-1" />
                  Éxito
                </button>
                <button className="btn btn-danger btn-sm" disabled>
                  <Spinner type="grow" color="light" size="sm" className="me-1" />
                  Error
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
