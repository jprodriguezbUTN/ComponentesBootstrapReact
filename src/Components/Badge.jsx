export default function Badge({
    children,
    color = "primary",
    icon = null,
    size = "normal",
    extraClasses = ""
}) {
    const sizeClass ={
        small: "px-2 py-1",
        normal: "px-3 py-2",
        large: "px-4 py-3"
    };

    const colorClass ={
        primary: "bg-primary",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning text-dark",
        info: "bg-info text-dark",
        secondary: "bg-secondary"
    };

    return (
        <span className={`badge ${colorClass[color]} ms-2 ${sizeClass[size]} ${extraClasses}`}>
            {icon && <i className={`bi bi-${icon} me-1`}></i>}
            {children}
        </span>
    );
}