import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { MiContexto } from "../context/CartContext";
import CarritoVacio from "./CartEmpty";
import { CarritoItems } from "./CartItems";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './Cart.module.css'

export function Cart() {
  const {
    clear,
    carrito,
    getItemPrice
  } = useContext(MiContexto);

  return (
    <>
      <div className={styles.container}>
        <div>
          {carrito.length === 0 ? (
            <CarritoVacio />
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBlockEnd:"3rem" }}>
                <h3>Carrito:</h3>
                <Button
                  className={styles.btnClearAll}
                  onClick={clear}
                >
                  Eliminar todo
                </Button>
              </div>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map(producto => <CarritoItems key={producto.id} producto = {producto}/>)}
                </tbody>
              </Table>
              <div className={styles.checkout}>
                <h5>TOTAL: ${(getItemPrice()).toLocaleString('en-US')}</h5>
                <Link to='/OrderCheckout'><Button className={styles.btnCheckout}>Finalizar Compra</Button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
