export default function PopOvers() {

  function PopoverButton({
    text,
    title,
    content,
    placement = "top",
    color = "primary",
    trigger = "focus",
    className = ""
  }) {
    return (
      <button
        type="button"
        className={`btn btn-${color} me-2 ${className}`}
        data-bs-toggle="popover"
        data-bs-placement={placement}
        data-bs-title={title}
        data-bs-content={content}
        data-bs-trigger={trigger}
      >
        {text}
      </button>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <div className="card shadow-sm p-3">

        <h5 className="mb-4">Popovers</h5>

        <PopoverButton
          text="Top"
          title="Arriba"
          content="Se muestra encima del botón"
          placement="top"
          color="secondary"
        />

        <PopoverButton
          text="Right"
          title="Derecha"
          content="Aparece al lado derecho"
          placement="right"
        />

        <PopoverButton
          text="Bottom"
          title="Abajo"
          content="Se muestra debajo"
          placement="bottom"
          color="success"
        />

        <PopoverButton
          text="Left"
          title="Izquierda"
          content="Aparece al lado izquierdo"
          placement="left"
          color="danger"
        />

      </div>
    </div>
  );
}