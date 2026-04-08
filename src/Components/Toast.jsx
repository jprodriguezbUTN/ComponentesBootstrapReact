import { useState } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";

const ToastComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        Mostrar Toast
      </Button>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={show}
          onClose={() => setShow(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notificación</strong>
            <small>Ahora</small>
          </Toast.Header>
          <Toast.Body>
            Este es un Toast con React Bootstrap 🚀
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastComponent;