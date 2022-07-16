import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from "react-bootstrap"
import * as style from './ItemCount.module.css'
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
    <>
      <ButtonGroup style={{marginInline: "2rem"}}>
          <Button className={style.btn__menosmas} onClick={ restar }>-</Button>
          <input type="number" style={{"textAlign": "center"}} value={ count } readOnly/>
          <Button className={style.btn__menosmas} onClick={ sumar }>+</Button>
      </ButtonGroup>
      <Button onClick={() => onAdd(count)} className={style.btn__add}>
          Agregar al Carrito
      </Button>
      <Button onClick={()=> { setCount(initial) }} className={style.btn__reset}>
        Reestablecer contador
      </Button>
  </>
  )
}
