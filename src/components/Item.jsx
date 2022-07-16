import React from 'react'
import { Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "../css/main.css";
import styles from "./Item.module.css";
import { AiOutlineTags } from "react-icons/ai"

export default function Item({ item }) {
    const { id ,category,nombre, color, precio, img } = item;

        
  return (
    <Card style={{ width: '18rem' }} className={styles.itemCard}>
        <Card.Img variant="top" className={styles.itemCardImg} src= { require("../images/"+img+".png") } />
        <Card.Body className={styles.itemCardBody}>
            <Card.Text className={styles.cardCategory}><span className={styles.icon}> <AiOutlineTags /></span>{ category }</Card.Text>
            <Card.Title style={{textAlign:"center"}}>{ nombre }</Card.Title>
            <Card.Text>Color: { color }.</Card.Text>
            <Card.Text>Precio: ${ precio.toLocaleString('en-US') }</Card.Text>
            <Link to={`/item/${id}`}><Button className={styles.btnItem}>Ver Más</Button></Link>
        </Card.Body>
    </Card>
    )
}
