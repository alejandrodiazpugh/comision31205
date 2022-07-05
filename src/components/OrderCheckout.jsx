import { getFirestore,addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MiContexto } from '../context/CartContext'
import * as styles from './OrderCheckout.module.css'
import {CarritoItems} from './CartItems';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

export function OrderCheckout() {
const { carrito, setCarrito, clear, getItemPrice } = useContext(MiContexto);
const [orderName, setOrderName] = useState('')
const [orderPhone, setOrderPhone] = useState('')
const [orderEmail, setOrderEmail] = useState('')
const [purchaseComplete, setPurchaseComplete] = useState(false)

const db = getFirestore();
const orderCollection = collection(db, 'orders');

  const handleClick = () => {
    const order = {
      buyer: {orderName, orderPhone, orderEmail},
      items: carrito,
      total: getItemPrice()
    }
    
    addDoc(orderCollection, order).then(({id}) => {
      console.log(id)
    })
  
    setPurchaseComplete(true)
  }


//TODO: VALIDAR ORDEN


  return (
    <div>
      <h1>Checkout:</h1>
      {purchaseComplete ? 
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}>
        <h4 style={{ textAlign: "center", marginBlockStart: "25vh" }}>
          ¡Tu orden ya nos llegó!
        </h4>
        <h6 style={{textAlign: "center", marginBlock: "5vh"}}>Tu confirmación llegará al correo que nos proporcionaste</h6>
        <Link to="/">
          <Button
            style={{ backgroundColor: "#fcce80", border: "none" }}
            size="lg"
          >
            Ir a la tienda
          </Button>
        </Link>
     </div> 
     : 
     <div>
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
        <form action="" className={styles.form}>
          <label htmlFor="name">Nombre Completo:</label>
            <input onChange={(e) => setOrderName(e.target.value)} type="text" name="name" id="orderName" />
          <label htmlFor="email">Correo Electrónico:</label>
            <input onChange={(e) => setOrderEmail(e.target.value)}type="email" name="mailing" id="orderEmail" />
          <label htmlFor="phone">Teléfono:</label>
            <input onChange={(e) => setOrderPhone(e.target.value)} type="tel" name="phone" id="orderPhone"/>
          <button className={styles.btnComplete} type='button' onClick={handleClick}>Finalizar Compra</button>
        </form>
      </div>
    }
</div> ) }
