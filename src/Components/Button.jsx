
export default function Button({ texto, color = "primary", tamano = "", onClick }) {
  if (tamano) tamano = "btn-" + tamano;

  return (
    <button
      type="button"
      className={`btn btn-${color} ${tamano} m-2`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}