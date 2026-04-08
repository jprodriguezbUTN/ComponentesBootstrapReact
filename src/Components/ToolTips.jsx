function TooltipButton(props) {
  const {
    text,
    tooltip,
    placement = "top",
    color = "primary"
  } = props;

  return (
    <button
      type="button"
      className={`btn btn-${color} me-2`}
      data-bs-toggle="tooltip"
      data-bs-placement={placement}
      title={tooltip}
    >
      {text}
    </button>
  );
}

export default function ToolTips() {
  return (
    <div className="container mt-4 text-center">
      <div className="card shadow-sm p-3">
        <h5 className="mb-4">Tooltips</h5>

        <TooltipButton text="Top" tooltip="Tooltip arriba" />
        <TooltipButton text="Right" tooltip="Tooltip derecha" placement="right" color="success" />
        <TooltipButton text="Bottom" tooltip="Tooltip abajo" placement="bottom" color="warning" />
        <TooltipButton text="Left" tooltip="Tooltip izquierda" placement="left" color="danger" />
      </div>
    </div>
  );
}