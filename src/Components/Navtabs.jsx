export default function Navtabs({
    variant = "",
    alignment = "",
    extraClasses = "",
}) {
    const Component = as;

    return (
        <ul className={`nav ${variant} ${alignment} ${extraClasses}`}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    );
}