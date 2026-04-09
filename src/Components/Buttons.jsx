export default function Buttons({ texto, color, tamano }) {
  return (
    <button type="button" className={`btn btn-${color} ${tamano} m-2`}>
      {texto}
    </button>
  );
}