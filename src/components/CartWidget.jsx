import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import swal from 'sweetalert'

export const CartWidget = ({ itemsEnCarrito } ) => {
  return (
    <>
    <li className='header__links' onClick={() => swal("Parce, no has agregado nada al carrito.")}><BsFillCartFill /> <span className='small'>{ itemsEnCarrito }</span></li>
    </>
  )
}
