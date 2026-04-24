export default function Form({ titulo, botonTexto = "Enviar" }) {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">

        {titulo && <h5 className="mb-4">{titulo}</h5>}

        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="correo@ejemplo.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribí tu mensaje..." />
          </div>

          <button type="submit" className="btn btn-primary">
            {botonTexto}
          </button>
        </form>

      </div>
    </div>
  )
}