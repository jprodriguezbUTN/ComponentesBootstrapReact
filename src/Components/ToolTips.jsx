import { useState } from "react";

export default function Tooltip({
  children,
  text,
  placement = "top"
}) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <span className={`tooltip-box tooltip-${placement}`}>
          {text}
        </span>
      )}
    </span>
  );
}