import { useState } from "react";
import Alert from "../Components/Alert";
import Buttons from "../Components/Buttons";

export default function PAlert() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <div onClick={() => setMostrar(!mostrar)}>
        <Buttons texto="Mostrar alertas" color="primary" tamano="" />
      </div>

      {mostrar && (
        <>
          <Alert color="primary" texto="A simple primary alert—check it out!" />
          <Alert color="secondary" texto="A simple secondary alert—check it out!" />
          <Alert color="success" texto="A simple success alert—check it out!" />
          <Alert color="danger" texto="A simple danger alert—check it out!" />
          <Alert color="warning" texto="A simple warning alert—check it out!" />
          <Alert color="info" texto="A simple info alert—check it out!" />
        </>
      )}
    </>
  );
}
