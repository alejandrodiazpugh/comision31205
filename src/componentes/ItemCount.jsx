import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Jordans from "../images/aj1.png"


export default function ItemCount(stock, initial, onAdd) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Jordans} />
        <Card.Body>
            <Card.Title>Air jordans</Card.Title>
            <ButtonGroup>
                <Button variant='dark'>-</Button>
                <input type="text" style={{"text-align": "center"}} />
                <Button variant='dark'>+</Button>
            </ButtonGroup>
            <Button onClick={onAdd} variant='success' style={{"margin-top": "1rem"}}>
                Añadir
            </Button>
        </Card.Body>
    </Card>
  )
}
