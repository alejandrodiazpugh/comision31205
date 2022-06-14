import React from 'react'
import ItemCount from './ItemCount';
import { Stack, Button } from "react-bootstrap" 
import swal from 'sweetalert';

export function ItemDetail({ detail }) {
    const {id, nombre, descripcion, img, precio, color} = detail;

    const onAdd = () => {
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "OK"
        })   
    }

  return (
    <>
    <Stack gap={3}>
        <div style={{display: "flex", boxShadow:"1px 1px #000", gap: "1rem", borderRadius: "0.5rem", backgroundColor:"white"}}>
            <div>
                <img src= { require("../images/"+ img +".jpg") } style={{width: "40vw", height: "40vh", objectFit:"contain"}} alt=""></img> 
            </div>
        <div style={{padding:"2rem"}}>
            <h2>{ nombre }</h2>
                <h5>Color: { color }</h5>
                <h4>${ precio }.00</h4>
                <h6>Seleccione una talla:</h6>
                <select htmlFor="tamaño">
                        <option value="default" defaultValue disabled>Tallas:</option>
                        <option value="size6">6</option>
                        <option value="size7">7</option>
                        <option value="size8">8</option>
                        <option value="size9">9</option>
                        <option value="size10">10</option>
                        <option value="size11">11</option>
                </select>
                <p style={{marginInline: "10rem", marginBlock: "5rem"}}>{ descripcion }</p>
                <ItemCount stock={10} initial={1} onAdd = {onAdd}/>
        </div>

        </div>
        
    </Stack>
        
    </>

  )
}
