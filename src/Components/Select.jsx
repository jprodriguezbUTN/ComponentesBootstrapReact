export default function Select({ texto, opciones, onChange }) {
  return (
    <select
      className="form-control mb-3" defaultValue="" onChange={onChange}>
      {texto && (<option value="" disabled>{texto}</option>
      )}
      {opciones.map((grupo, index) => (
        <optgroup key={index} label={grupo.label}>
          {grupo.options.map((op, i) => (
            <option key={i} value={op.value}>
              {op.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}