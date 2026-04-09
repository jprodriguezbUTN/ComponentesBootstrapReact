export default function Dropdown({ titulo = "Seleccionar", opciones }) {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {titulo}
            </button>


            <ul className="dropdown-menu">
                {opciones.map((opcion, index) => (
                    <li key={index}>
                        <a className="dropdown-item" href={opcion.link}>
                            {opcion.texto}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


