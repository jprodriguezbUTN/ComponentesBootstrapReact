import { useState } from "react";

export default function Popover({
  children,
  title,
  content,
  placement = "top"
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="popover-wrapper">
      
      <span
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        {children}
      </span>

      {open && (
        <section className={`popover-box popover-${placement}`}>
          {title && <header className="popover-header">{title}</header>}
          <div className="popover-body">{content}</div>
        </section>
      )}

    </span>
  );
}