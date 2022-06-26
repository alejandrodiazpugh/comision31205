import React, { useEffect, useState } from 'react'
import { Card, Button, ButtonGroup }from "react-bootstrap"
import "../css/itemCount.css"
import swal from 'sweetalert'


export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect(() => { 
    if(count >= stock) {
      console.log("Pedido sobrepasa el stock")
      swal("Alerta",`Solo puedes ordenar un máximo de ${ stock } unidades de este producto.`, "info")
    }
  }, [count])
  
  const restar = () => {
    count > initial ? setCount(count - 1) : console.log("la cantidad del pedido no puede ser menor"); 
  }

  const sumar = () => {
    if((count >= 1) && (count < stock)) {
      setCount(count + 1)
    }
  }

  return (
    <Card style={{marginInline: "10rem"}}>
      <ButtonGroup style={{marginInline: "2rem"}}>
          <Button className='btn-menosmas' onClick={ restar }>-</Button>
          <input type="number" style={{"textAlign": "center"}} value={ count } readOnly/>
          <Button className='btn-menosmas' onClick={ sumar }>+</Button>
      </ButtonGroup>
      <Button onClick={() => onAdd(count)} className="btn-add" style={{"marginTop": "1rem", marginInline: "2rem"}}>
          Añadir
      </Button>
      <Button onClick={()=> { setCount(initial) }} variant="light" style={{"marginTop": "1rem", marginInline: "2rem"}}>
        Reset
      </Button>
  </Card>
  )
}
