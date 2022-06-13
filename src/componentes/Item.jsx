import React from 'react'
import ItemCount from './ItemCount'
import { Card, Button} from "react-bootstrap"
import swal from 'sweetalert'

export default function Item({ item }) {
    const { nombre, color, precio, stock, img } = item;
    
    const onAdd = () => {
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "OK"
        }) 
    }
    const imgStyle = {
        maxWidth: "18rem", 
        height:"12rem", 
        objectFit:"contain"}

        //TODO: Buscar fotos similares de los productos.
    
  return (
    <Card style={{ width: '18rem'}} className="tarjeta">
        <Card.Img variant="top" style={ imgStyle} src= { require("../images/"+img+".jpg") } />
        <Card.Body>
            <Card.Title>{ nombre }</Card.Title>
            <Card.Text>Color: { color }.</Card.Text>
            <Card.Text>Precio ${ precio }</Card.Text>
            <Button style={{backgroundColor: "#fcce80", border: "none"}}>Detalle</Button>
        </Card.Body>
         <ItemCount stock = { stock } initial = { 1 } onAdd = { onAdd }/>
    </Card>
    )
}
