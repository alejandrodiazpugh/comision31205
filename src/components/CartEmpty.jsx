import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from './Cart.module.css';

export default function CarritoVacio() {
  return (
    <div className={styles.emptyContainer}>
      <h4>
        Parece que no hay nada en el carrito...
      </h4>
      <Link to="/">
        <Button
          className={styles.btnCheckout}
          size="lg"
        >
          Ir a la tienda
        </Button>
      </Link>
    </div>
  );
}
