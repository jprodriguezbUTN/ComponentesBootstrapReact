import Imagenes from "./Images"

export default function Card ({
  titulo, texto, header, footer, bg="", colorTexto="", align="",
  children
}

) {

  const color_Background = {
    "primario": "text-bg-primary",
    "secundario": "text-bg-secondary",
    "exito": "text-bg-success",
    "amarillo": "text-bg-warning",
  }[bg];

  const color_Texto = {
    "blanco": "text-white",
    "negro": "text-black",
  }[colorTexto];

  const alineacion_texto = {
    "Izquierda": "text-start",
    "Derecha": "text-end",
    "Centro": "text-center",
  }[align];

  return (
    <div className={`card ${color_Background} ${color_Texto} ${alineacion_texto}`} style={{ width: "18rem" }} >
      {header && <div className="card-header">{header}</div>}

      {children}
      
      <div className="card-body">
        {titulo && <h5 className="card-title">{titulo}</h5>}

        {texto && <p className="card-text">{texto}</p>}
      </div>

      {footer && <div className="card-footer">{footer}</div>} 

    </div>
  )
}