import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import swal from 'sweetalert'

export const CartWidget = () => {
  let counter = 0; //simulando el movimiento del counter, no es final
  return (
    <>
    <li className='header__links' onClick={() => swal("Parce, no has agregado nada al carrito.")}><BsFillCartFill /> <span className='small'>{counter}</span></li>
    </>
  )
}
