import React from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { MiContexto } from '../context/CartContext'

export function CarritoItems({producto}) {
    const {removeItem} = useContext(MiContexto);
    
  return (
   <>
    <tr style={{textAlign: "center", marginBlock:"auto", height:"10vh"}}>
      <td><img src={require("../images/"+producto.img+".png") } alt="" style={{width: "5vw", Height: "10vh"}} /></td>
      <td>{producto.category} {producto.nombre}</td>
      <td>{producto.quantity}</td>
      <td>${producto.precio}</td>
      <td>${producto.precio * producto.quantity}</td>
      <td><Button style={{backgroundColor: "#f48581", border: "none"}} onClick={()=>removeItem(producto.id)}>Eliminar</Button></td>
    </tr>
   </>
)}
