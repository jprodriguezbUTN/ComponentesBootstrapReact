export default function ScrollSpy({ target, children, height = "100vh" }) {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target={target}
      data-bs-offset="0"
      tabIndex={0}
      style={{ height: height, overflowY: "scroll", position: "relative" }}
    >
      {children}
    </div>
  );
}