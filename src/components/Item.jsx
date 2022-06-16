import React from 'react'
import { Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

export default function Item({ item }) {
    const { id, nombre, color, precio, stock, img } = item;
    
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
    
  return (
    <Card style={{ width: '18rem'}} className="tarjeta">
        <Card.Img variant="top" style={ imgStyle} src= { require("../images/"+img+".jpg") } />
        <Card.Body style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center"}}>
            <Card.Title>{ nombre }</Card.Title>
            <Card.Text>Color: { color }.</Card.Text>
            <Card.Text>Precio ${ precio }</Card.Text>
            <Link to={"/item/:id"}><Button style={{backgroundColor: "#fcce80", border: "none"}}>Ver Más</Button></Link>
        </Card.Body>
    </Card>
    )
}
