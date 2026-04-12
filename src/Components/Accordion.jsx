import { useState } from "react";

export default function Accordion({ titulo, contenido }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "10px" }}>
      
      <div
        onClick={() => setOpen(!open)}
        style={{
          background: "#222",
          color: "white",
          padding: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          borderRadius: "6px"
        }}
      >
        {titulo}
      </div>

      {open && (
        <div
          style={{
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px"
          }}
        >
          {contenido}
        </div>
      )}
      
    </div>
  );
}