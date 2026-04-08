export default function Imagenes({ url, clases, ancho, alto, estilo }) {
    return (
        <img src={url} alt="Imagen no cargada" className={clases} width={ancho} height={alto} style={estilo} />
    )
}