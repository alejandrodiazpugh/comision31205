import { getFirestore, addDoc, collection } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MiContexto } from "../context/CartContext";
import styles from "./OrderCheckout.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export function OrderCheckout() {
  const { carrito, getItemPrice, clear } = useContext(MiContexto);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cart: carrito
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Campo Obligatorio"),
      lastName: Yup.string().required("Campo Obligatorio"),
      email: Yup.string()
        .email("Ingresa una dirección de correo válida")
        .required("Campo Obligatorio"),
      phone: Yup.string()
        .matches(phoneRegExp, "Ingresa un número de teléfono válido")
        .required("Campo Obligatorio"),
      cart: Yup.array()
      .min(1)
      .required('El carrito está vacío')
    }),
    onSubmit: (values) => {
      addDoc(orderCollection, values).then(() => {
       clear();
      })
      .finally(() => 
      setPurchaseComplete(true));
        }
    })


  return (
    <div className={styles.masterContainer}>
      <h1 className={styles.checkoutTitle}>Resumen de pedido:</h1>
      {purchaseComplete ? (
        <div className={styles.orderCompleteContainer}>
          <h4 style={{ textAlign: "center", marginBlockStart: "25vh" }}>
            ¡Tu orden ya nos llegó!
          </h4>
          <h6 style={{ textAlign: "center", marginBlock: "5vh" }}>
            Tu confirmación llegará al correo que nos proporcionaste.
          </h6>
          <Link to="/">
            <Button
              className={styles.btn}
              size="lg"
            >
              Ir a la tienda
            </Button>
          </Link>
        </div>
      ) : (
        <div className={styles.checkoutContainer}>
          <div className={styles.finalListingCard}>
            <div>
              <h5>Productos:</h5>
              {carrito.map((producto) => (
                <section>
                  {producto.quantity} x {producto.nombre} - $
                  {(producto.precio * producto.quantity).toLocaleString(
                    "en-US"
                  )}
                </section>
              ))}
            </div>

            <h3>Total a pagar: ${getItemPrice().toLocaleString("en-US")}.00</h3>
          </div>
          <div className={styles.finalListingCard}>
            <h5>Detalles de comprador:</h5>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <label className={styles.label} htmlFor="firstName">Nombre:</label>
              <input className={styles.field}
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
              />
              <div className={styles.error}>
              {formik.touched.firstName && formik.errors.firstName ? (
               <p>{formik.errors.firstName}</p> 
              ) : null}
              </div>

              <label className={styles.label} htmlFor="lastName">Apellido:</label>
              <input
                className={styles.field}
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
              />
              <div className={styles.error}>
              {formik.touched.lastName && formik.errors.lastName ? (
               <p>{formik.errors.lastName}</p>
              ) : null}
              </div>

              <label className={styles.label} htmlFor="phone">Teléfono: </label>
              <input
               className={styles.field}
                id="phone"
                type="phone"
                {...formik.getFieldProps("phone")}
              />
              <div className={styles.error}>
              {formik.touched.phone && formik.errors.phone ? (
                <p>{formik.errors.phone}</p>
              ) : null}
              </div>

              <label className={styles.label} htmlFor="email">Correo Electrónico:</label>
              <input
                className={styles.field}
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              <div className={styles.error}>
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
              </div>

              <Button type="submit"  className={styles.btn}>Pagar</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
