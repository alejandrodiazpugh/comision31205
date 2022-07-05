import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { MiContexto } from "../context/CartContext";
import CarritoVacio from "./CartEmpty";
import { CarritoItems } from "./CartItems";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Cart() {
  const {
    clear,
    carrito,
    getItemPrice
  } = useContext(MiContexto);

  return (
    <>
      <div style={{ marginInline: "5rem", marginBlock: "3rem" }}>
        <div>
          {carrito.length === 0 ? (
            <CarritoVacio />
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBlockEnd:"3rem" }}>
                <h3>Carrito:</h3>
                <Button
                  style={{ borderColor: "#fcce80", backgroundColor:"white", color:"#fcce80"}}
                  onClick={clear}
                >
                  Eliminar todo
                </Button>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Preview</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map(producto => <CarritoItems key={producto.id} producto = {producto}/>)}
                </tbody>
              </Table>
              <div>
                <h5>TOTAL: ${getItemPrice()}.00</h5>
                <Link to='/OrderCheckout'><Button style={{ backgroundColor: "#fcce80", border: "none" }}>Ir a Checkout</Button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
