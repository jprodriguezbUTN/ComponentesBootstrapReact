export default function Imagenes({
  url,
  tipo = "Normal",
  clases,
  className = "",
  alt = "Imagen no cargada",
  ancho = "200px",
  alto = "200px",
}) {
  const tipoClass = tipo === "Redondo" ? "rounded" : "";
  const posicionClass = {
    Responsivo: "img-fluid",
    Izquierda: "float-start",
    Derecha: "float-end",
    Centro: "mx-auto d-block",
    Bordes: "img-thumbnail",
  }[clases];

  const classNames = [tipoClass, posicionClass, className].filter(Boolean).join(" ");

  return (
    <img
      src={url}
      alt={alt}
      className={classNames || undefined}
      style={{ width: ancho, height: alto }}
    />
  );
}