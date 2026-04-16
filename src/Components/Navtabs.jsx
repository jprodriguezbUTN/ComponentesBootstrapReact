import { NavLink, useLocation } from "react-router-dom";

export default function NavTabs({
    tabs = [],
    centered = false,
    vertical = false,
    fill = false,
    variant = "tabs",
}) {
    const location = useLocation();

    const navClasses = [
        "nav",
        variant === "pills" ? "nav-pills" : "nav-tabs",
        centered ? "justify-content-center" : "",
        vertical ? "flex-column" : "flex-row",
        fill ? "nav-fill" : "",
        "mb-3"
    ].join(" ");

    return (
        <ul className={navClasses}>
            {tabs.map(({ label, to, icon, disabled }, index) => (
                <li className="nav-item" key={index}>
                    <NavLink
                        to={disabled ? "#" : to}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""} ${disabled ? "disabled" : ""}`
                        }
                        onClick={(e) => disabled && e.preventDefault()}
                    >
                        {({ isActive }) => (
                            <>
                                {icon && <i className={`bi ${icon} me-1`}></i>}
                                {label}
                                {isActive && !disabled && (
                                    <span className="badge bg-success ms-2">Activo</span>
                                )}
                            </>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}