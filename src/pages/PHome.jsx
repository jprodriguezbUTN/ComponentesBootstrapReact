export default function PHome() {
  return (
    <div className="container mt-5">

      <div className="row mb-5">
        <div className="col-md-10 mx-auto">
          <h1 className="display-4 mb-4">
            Bienvenidos a Tecnologías y Sistemas Web I
            <span className="badge bg-primary ms-3">2026</span>
          </h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="bi bi-puzzle"></i> Componentes Bootstrap
              </h5>
              <span className="badge bg-warning text-dark">Básico</span>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Veremos componentes de BootStrap adaptados a React
              </p>
              <div className="mt-3">
                <span className="badge bg-success me-2">
                  <i className="bi bi-star"></i> React
                </span>
                <span className="badge bg-info text-dark me-2">
                  <i className="bi bi-palette"></i> Bootstrap 5
                </span>
                <span className="badge bg-secondary me-2">
                  <i className="bi bi-lightning"></i> JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <div className="card border-success">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="bi bi-gear"></i> Estructura Modular
              </h5>
              <span className="badge bg-warning text-dark">Intermedio</span>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Además se segmentan en partes para una mejor optimización
              </p>
              <div className="mt-3">
                <span className="badge bg-success me-2">
                  <i className="bi bi-check-circle"></i> Modular
                </span>
                <span className="badge bg-info text-dark me-2">
                  <i className="bi bi-speedometer"></i> Optimizado
                </span>
                <span className="badge bg-secondary me-2">
                  <i className="bi bi-folder"></i> Organizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 mx-auto">
          <h4 className="mb-3">
            <i className="bi bi-list-check"></i> Temas a Explorar
          </h4>
          <div className="list-group">
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-book"></i> Componentes Básicos
              </span>
              <span className="badge bg-success">
                <i className="bi bi-check-circle"></i> Completado
              </span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-graph-up"></i> Componentes Avanzados
              </span>
              <span className="badge bg-warning text-dark">
                <i className="bi bi-arrow-repeat"></i> En progreso
              </span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-lightning-charge"></i> React Hooks
              </span>
              <span className="badge bg-info text-dark">
                <i className="bi bi-arrow-right"></i> Próximo
              </span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-briefcase"></i> Proyectos Finales
              </span>
              <span className="badge bg-danger">
                <i className="bi bi-lock"></i> No iniciado
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
