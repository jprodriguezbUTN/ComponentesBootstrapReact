import Imagenes from "./Images"

export default function Card ({
  titulo, texto, header, footer, bg="", colorTexto="", align="",
  children
}
) {
  return (
    <div className={`card ${bg} ${colorTexto} ${align}`} style={{ width: "18rem" }} >
      {header && <div className="card-header">{header}</div>}

      {children}
      
      <div className="card-body">
        {titulo && <h5 className="card-title">{titulo}</h5>}

        {texto && <p className="card-text">{texto}</p>}

        {children}
      </div>

      {footer && <div className="card-footer">{footer}</div>} 

    </div>
  )
}