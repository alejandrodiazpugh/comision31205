import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CarritoVacio() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h4 style={{ textAlign: "center", marginBlockStart: "25vh" }}>
        Parece que no hay nada en el carrito...
      </h4>
      <Link to="/">
        <Button
          style={{ backgroundColor: "#fcce80", border: "none" }}
          size="lg"
        >
          Ir a la tienda
        </Button>
      </Link>
    </div>
  );
}
