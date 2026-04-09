export default function Imagenes({ url, tipo = "Normal", clases, alt = "Imagen no cargada", ancho = "200px", alto = "200px" }) {
    if (tipo === "Redondo") {
        if (clases === "Responsivo") {
            return <img src={url} className="rounded img-fluid" alt={alt} width={ancho} height={alto} />;
        } else if (clases === "Izquierda") {
            return <img src={url} className="rounded float-start" alt={alt} width={ancho} height={alto} />;
        } else if (clases === "Derecha") {
            return <img src={url} className="rounded float-end" alt={alt} width={ancho} height={alto} />;
        } else if (clases === "Centro") {
            return <img src={url} className="rounded mx-auto d-block" alt={alt} width={ancho} height={alto} />;
        } else if (clases === "Bordes") {
            return <img src={url} className="rounded img-thumbnail" alt={alt} width={ancho} height={alto} />;
        }
    } else if (tipo === "Normal") {
        if (bordes === "SinBordes") {
            if (clases === "Responsivo") {
                return <img src={url} className="img-fluid" alt={alt} width={ancho} height={alto} />;
            } else if (clases === "Izquierda") {
                return <img src={url} className="float-start" alt={alt} width={ancho} height={alto} />;
            } else if (clases === "Derecha") {
                return <img src={url} className="float-end" alt={alt} width={ancho} height={alto} />;
            } else if (clases === "Centro") {
                return <img src={url} className="mx-auto d-block" alt={alt} width={ancho} height={alto} />;
            } else if (clases === "Bordes") {
                return <img src={url} className="img-thumbnail" alt={alt} width={ancho} height={alto} />;
            }
        }
    }
}