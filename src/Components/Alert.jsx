export default function Alert({
  color = "primary",
  texto = "",
  className = "",
  children,
}) {
  const alertaClass = ["alert", `alert-${color}`, className].filter(Boolean).join(" ");

  return (
    <div className={alertaClass} role="alert">
      {texto || children}
    </div>
  );  
}
