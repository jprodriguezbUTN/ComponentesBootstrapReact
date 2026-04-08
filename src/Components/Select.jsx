export default function Select( clases, arial_label, tamano, habilitado = true, opcion = false, opciones = [] ){
    return (
        <select className={clases} aria-label={arial_label} size={tamano} disabled={habilitado} multiple={!opcion}>
            <option value="">{texto}</option>
            {opciones.map((op, index) => 
                <option key={index} value={op.value}>{op.label}</option>  
            )}
        </select>
    )    
}
