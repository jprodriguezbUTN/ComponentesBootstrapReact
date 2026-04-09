export default function Navtabs({
    as = "ul",
    variant = "",
    alignment = "",
    extraClasses = "",
    children
}) {
    const Component = as;

    return (
        <Component className={`nav ${variant} ${alignment} ${extraClasses}`}>
            {children}
        </Component>
    );
}