import Accordion from "../Components/Accordion";

export default function PAccordion() {
  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h2>🏎️ Carros Deportivos Legendarios</h2>

      <Accordion
        titulo="Nissan GT-R (R35)"
        contenido="El Nissan GT-R es conocido como el 'Godzilla' japonés. Es famoso por su potencia, tracción AWD y capacidad de competir con superdeportivos mucho más caros."
      />
      <Accordion
        titulo="Toyota Supra MK4"
        contenido="El Toyota Supra MK4 es un ícono del tuning. Su motor 2JZ es legendario por soportar altísimos niveles de potencia con modificaciones."
      />
      <Accordion
        titulo="Porsche 911 Turbo"
        contenido="El Porsche 911 Turbo combina lujo, precisión alemana y rendimiento brutal. Es uno de los deportivos más equilibrados del mundo."
      />
      <Accordion
        titulo="Ferrari F40"
        contenido="El Ferrari F40 es un superdeportivo clásico sin ayudas electrónicas. Es uno de los últimos Ferrari creados bajo la supervisión de Enzo Ferrari."
      />
      <Accordion
        titulo="Lamborghini Huracán"
        contenido="El Huracán es un V10 atmosférico con diseño agresivo y sonido espectacular. Representa la esencia moderna de Lamborghini."
      />
    </div>
  );
}