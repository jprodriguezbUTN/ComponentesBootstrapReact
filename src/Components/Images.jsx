export default function Imagenes({ url, tipo = "Normal", bordes = "SinBordes", clases, ancho = "200px", alto = "200px" }) {
    if (tipo === "Redondo") {
        if (bordes === "SinBordes") {
            if (clases === "Responsivo") {
                return <img src={url} className="rounded img-fluid" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Izquierda") {
                return <img src={url} className="rounded float-start" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Derecha") {
                return <img src={url} className="rounded float-end" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Centro") {
                return <img src={url} className="rounded mx-auto d-block" alt="Imagen no cargada" width={ancho} height={alto} />;
            }
        } else if (borde === "ConBordes") {
            if (clases === "Responsivo") {
                return <img src={url} className="rounded img-fluid img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Izquierda") {
                return <img src={url} className="rounded float-start img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Derecha") {
                return <img src={url} className="rounded float-end img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Centro") {
                return <img src={url} className="rounded mx-auto d-block img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            }
        }
    } else if (tipo === "Normal" || tipo === "Cuadrado") {
        if (bordes === "SinBordes") {
            if (clases === "Responsivo") {
                return <img src={url} className="img-fluid" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Izquierda") {
                return <img src={url} className="float-start" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Derecha") {
                return <img src={url} className="float-end" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Centro") {
                return <img src={url} className="mx-auto d-block" alt="Imagen no cargada" width={ancho} height={alto} />;
            }
        } else if (bordes === "ConBordes") {
            if (clases === "Responsivo") {
                return <img src={url} className="img-fluid img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Izquierda") {
                return <img src={url} className="float-start img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Derecha") {
                return <img src={url} className="float-end img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            } else if (clases === "Centro") {
                return <img src={url} className="mx-auto d-block img-thumbnail" alt="Imagen no cargada" width={ancho} height={alto} />;
            }
        }
    }
}