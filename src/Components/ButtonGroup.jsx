export default function ButtonGroup() {
  return (
    <div className="container mt-5 text-center">
      
      <div className="card shadow-lg p-4">
        <h3>Grupo de botones</h3>
      
        <div className="btn-group mb-4" role="group">
          <button type="button" className="btn btn-primary">Inicio</button>
          <button type="button" className="btn btn-success">Guardar</button>
          <button type="button" className="btn btn-warning">Editar</button>
          <button type="button" className="btn btn-danger">Eliminar</button>
        </div>

        <hr />

        <h5 className="mb-3">Opciones</h5>
        <div className="btn-group-vertical" role="group">
          <button type="button" className="btn btn-secondary">Perfil</button>
          <button type="button" className="btn btn-secondary">Configuración</button>
          <button type="button" className="btn btn-secondary">Salir</button>
        </div>
      </div>

    </div>
  );
}