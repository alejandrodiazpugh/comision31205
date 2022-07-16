import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";
import { useContext } from "react";
import styles from "./ItemDetail.module.css";

export function ItemDetail({ detail }) {
  const { id, nombre, descripcion, img, precio, color, stock } = detail;
  const [dismount, setDismount] = useState(false);
  const { isInCart, addItem, getItemQty } = useContext(MiContexto);

  const onAdd = (estado) => {
    isInCart(id);
    addItem(detail, estado);
    console.log(getItemQty());
    swal({
      title: "Éxito",
      text: "Se han agregado los productos al carrito",
      icon: "success",
      button: "OK",
    });
    setDismount(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src={require("../images/" + img + ".png")}
            className={styles.img}
            alt=""
          ></img>
        </div>
        <div
        className={styles.content}
        >
          <h2>{nombre}</h2>
          <h5>Color: {color}</h5>
          <p style={{fontWeight:"light"}}> ${parseInt(precio).toLocaleString('en-US')} </p>

          <p className={styles.description}>
            {descripcion}
          </p>
          {dismount ? (
            <div className={styles.afterPurchase}>
              <Link to="/Carrito">
                <Button className={styles.btn__completePurchase}> 
                  Revisar Carrito
                </Button>
              </Link>
              <Link to="/">
                <Button className={styles.btn__back}>
                  Volver a la tienda
                </Button>
              </Link>
              
            </div>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
}
