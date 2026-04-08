export default function Buttons() {
  return (
    <div className="container mt-5 text-center">
      <div className="card shadow p-4">
        <div className="btn-group" role="group" aria-label="Grupo de botones de acciones">

          <button type="button" className="btn btn-primary">Inicio</button>
          <button type="button" className="btn btn-success">Guardar</button>
          <button type="button" className="btn btn-warning">Editor</button>
          <button type="button" className="btn btn-danger">Eliminar</button>

        </div>
      </div>
    </div>
  );
}