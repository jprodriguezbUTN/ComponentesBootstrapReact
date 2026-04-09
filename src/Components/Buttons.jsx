export default function Buttons() {
  return (
    <div className="container mt-4 text-center">

      <h3>Botones</h3>

      <button type="button" class="btn btn-primary m-2">Inicio</button>
      <button type="button" class="btn btn-success m-2">Guardar</button>
      <button type="button" class="btn btn-danger btn-lg m-2">Eliminar</button>

      <br />

      <button type="button" class="btn btn-outline-primary m-2">Ver más</button>
      <button type="button" class="btn btn-secondary m-2" disabled>Bloqueado</button>
      <button type="button" class="btn btn-outline-dark btn-sm">Cerrar</button>

    </div>
  );
}