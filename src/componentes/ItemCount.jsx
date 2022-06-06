import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Jordans from "../images/aj1.png"
import "./itemCount.css"
import swal from 'sweetalert'


export default function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(initial);
  useEffect(() => { //en el after no se usó y lo podría haber hecho con un if, pero me sirve practicar el use effect
    if(count >= stock) {
      console.log("Pedido sobrepasa el stock")
      swal("Alerta",`Solo puedes ordenar un máximo de ${ stock } unidades de este producto.`, "info")
    }
  }, [count])
  
  const restar = () => {
    count > initial ? setCount(count - 1) : console.log("la cantidad del pedido no puede ser menor"); // podría ser count > 1, pero estoy pensando que al declarar el inicial, la tienda no quiere que se pueda ordenar una cantidad menor
  }

  const sumar = () => {
    if((count >= 1) && (count < stock)) {
      setCount(count + 1)
    }
  }

  return (
    <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={Jordans} />
        <Card.Body>
            <Card.Title>Air Jordans</Card.Title>
            <ButtonGroup>
                <Button className='btn-menosmas' onClick={ restar }>-</Button>
                <input type="number" style={{"textAlign": "center"}} value={ count } readOnly/>
                <Button className='btn-menosmas' onClick={ sumar }>+</Button>
            </ButtonGroup>
            <Button onClick={onAdd} className="btn-add" style={{"marginTop": "1rem", marginInline: "0.5rem"}}>
                Añadir
            </Button>
            <Button onClick={()=> { setCount(initial) }} variant="light" style={{"marginTop": "1rem"}}>
              Reset
            </Button>
        </Card.Body>
    </Card>
  )
}
