export default function Alert({ 
  color = "primary", 
  children, 
  extraClasses = "" 
}) {
  return (
    <div 
      className={`alert alert-${color} ${extraClasses}`} 
      role="alert"
    >
      {children}
    </div>
  );
}
