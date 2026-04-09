export default function Alert({color,texto}){
    return (
        <div class={`alert alert-${color}`} role="alert">{texto}</div>
    )
}

