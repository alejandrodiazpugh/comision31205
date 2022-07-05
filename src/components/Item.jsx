import React from 'react'
import { Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "../css/main.css";
import { AiOutlineTags } from "react-icons/ai"

export default function Item({ item }) {
    const { id ,category,nombre, color, precio, img } = item;
    const mouseEnter = (e) => {
        e.target.style.background = 'hsla(38, 95%, 75%, 0.840)'
    }
    const mouseLeave = (e) => {
        e.target.style.background = '#fcce80'
    }
    
    
  return (
    <Card style={{ width: '18rem', border: "2px solid #4b5158"}} className="itemCard">
        <Card.Img variant="top" className="itemCardImg" src= { require("../images/"+img+".png") } />
        <Card.Body style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center"}} className="itemCardBody">
            <Card.Text style={{fontWeight:"lighter", backgroundColor: "#90d4e4", color:"black", borderRadius: "0.3rem", paddingInline:"8px"}}><AiOutlineTags />{ category }</Card.Text>
            <Card.Title style={{textAlign:"center"}}>{ nombre }</Card.Title>
            <Card.Text>Color: { color }.</Card.Text>
            <Card.Text>Precio: ${ precio }</Card.Text>
            <Link to={`/item/${id}`}><Button style={{backgroundColor: "#fcce80", border: "none", color: "#34344A"}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Ver Más</Button></Link>
        </Card.Body>
    </Card>
    )
}
