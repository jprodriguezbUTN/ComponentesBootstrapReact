export default function Select({ texto, opciones }) {
    return (
        <select defaultValue="">
            <option value="" disabled>
                {texto}
            </option>
            {opciones.map((op, index) => (
                <option key={index} value={op.value}>
                    {op.label}
                </option>
            ))}
        </select>
    );     
}