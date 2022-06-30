import React from 'react'
import { Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    const { id ,category,nombre, color, precio, img } = item;
    
    const imgStyle = {
        maxWidth: "18rem", 
        height:"12rem", 
        objectFit:"contain"}
    
  return (
    <Card style={{ width: '18rem'}} className="tarjeta">
        <Card.Img variant="top" style={ imgStyle } src= { require("../images/"+img+".png") } />
        <Card.Body style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center"}}>
            <Card.Text style={{fontWeight:"lighter"}}>{ category }</Card.Text>
            <Card.Title style={{textAlign:"center"}}>{ nombre }</Card.Title>
            <Card.Text>Color: { color }.</Card.Text>
            <Card.Text>Precio ${ precio }</Card.Text>
            <Link to={`/item/${id}`}><Button style={{backgroundColor: "#fcce80", border: "none"}}>Ver Más</Button></Link>
        </Card.Body>
    </Card>
    )
}
