import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import swal from 'sweetalert'

export const CartWidget = () => {
  
  return (
    <>
    <li className='header__links' onClick={() => swal("Parece que no has agregado nada al carrito.")}><BsFillCartFill /></li>
    </>
  )
}
