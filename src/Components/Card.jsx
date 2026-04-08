import Imagenes from "./Images"

export default function Card ({

  url, ancho, alto, estilo,

  titulo, texto, imgPosicion = "arriba", header, footer, bg="", colorTexto="", align="",

  children
}

) {
  return (

    <div className={`card ${bg} ${colorTexto} ${align}`} style={{ width: "18rem" }} >

      {header && <div className="card-header">{header}</div>}

      {url && imgPosicion === "arriba" && (
        <Imagenes url={url} clases="card-img-top" ancho={ancho} alto={alto} estilo={estilo} />
      )}

      <div className="card-body">
        {titulo && <h5 className="card-title">{titulo}</h5>}

        {texto && <p className="card-text">{texto}</p>}

        {children}
      </div>

      {url && imgPosicion === "abajo" && (
        <Imagenes url={url} clases="card-img-bottom" ancho={ancho} alto={alto} estilo={estilo} />
      )}

      {footer && <div className="card-footer">{footer}</div>} 

    </div>
  )
}