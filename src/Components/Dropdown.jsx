export default function Dropdown({ posicion, opciones = [], children }) {
    
    const posicionesString = {
        down: "down",
        up: "dropup",
        right: "dropend",
        left: "dropstart"
    };

    const posicionBootstrap = posicionesString[posicion];
    
    return (
        <div className={`${posicionBootstrap} d-inline-block`}>
            <span
                className="dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: 'pointer' }}
            >
                {children}
            </span>

            <ul className="dropdown-menu show">
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
