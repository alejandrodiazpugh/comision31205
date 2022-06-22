import React, { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { MiContexto } from '../context/CartContext';
import { Badge } from "react-bootstrap"


export const CartWidget = () => {
  const { getItemQty } = useContext(MiContexto);

  return (
    <>
    <li className='header__links'><BsFillCartFill />{(getItemQty() === 0) ? "" : <Badge pill bg="danger">{ getItemQty() }</Badge>}</li>
    
    </>
  )
}
