import { useState } from "react";
import Alert from "../Components/Alert";
import Button from "../Components/Button";

export default function PAlert() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <div onClick={() => setMostrar(!mostrar)}>
        <Button texto={mostrar ? "Ocultar alertas" : "Mostrar alertas"} color="primary" tamano="" />
      </div>

      {mostrar && (
        <>
          <Alert color="primary">A simple primary alert—check it out!</Alert>
          <Alert color="secondary">A simple secondary alert—check it out!</Alert>
          <Alert color="success">A simple success alert—check it out!</Alert>
          <Alert color="danger">A simple danger alert—check it out!</Alert>
          <Alert color="warning">A simple warning alert—check it out!</Alert>
          <Alert color="info">A simple info alert—check it out!</Alert>
        </>
      )}
    </>
  );
}
