import { useState } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";

export default function ToastComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        Mostrar Toast
      </Button>

      <ToastContainer position="top-end">
        <Toast show={show} onClose={() => setShow(false)} autohide delay={2500}>
          <Toast.Body>Acción realizada</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}