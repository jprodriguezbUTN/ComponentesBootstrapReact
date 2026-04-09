import { useState } from "react";
import Offcanvas from "../Components/Offcanvas";

export default function POffcanvas() {
  const [show, setShow] = useState(false);

  const abrir = () => setShow(true);
  const cerrar = () => setShow(false);

  return (
    <>
    <button
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
  >
    Enable body scrolling
  </button>
    <Offcanvas title="titulo">
        
        ya funciona
        
        </Offcanvas>
    </>
    
   
  );
}