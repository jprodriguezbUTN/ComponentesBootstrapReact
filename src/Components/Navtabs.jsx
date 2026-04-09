export default function NavTabs({ 
    variant = "", 
    alignment = "" 
}) {
  return (
    <ul className={`nav ${variant} ${alignment}`}>
      <li className="nav-item">
        <button className="nav-link active">Active</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Link</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Link</button>
      </li>
      <li className="nav-item">
        <button className="nav-link disabled" disabled>
          Disabled
        </button>
      </li>
    </ul>
  );
}