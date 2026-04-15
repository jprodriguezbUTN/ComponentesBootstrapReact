import { useEffect } from "react";
import * as bootstrap from "bootstrap";

export default function ScrollSpy({ target, children, height = "100vh" }) {
  
  useEffect(() => {
    const scrollElement = document.querySelector('[data-bs-spy="scroll"]');

    if (scrollElement) {
      new bootstrap.ScrollSpy(scrollElement, {
        target: target,
        offset: 0
      });

    }
  }, [target]);
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