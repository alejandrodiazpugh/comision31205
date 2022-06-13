import React from 'react'
import { Stack } from "react-bootstrap" 

export function ItemDetail({ detail }) {
    const {id, nombre, descripcion, img, precio, color} = detail;

  return (
    <>
    <Stack gap={3}>
        <div style={{display: "flex", boxShadow:""}}>
            <div style={{border:"1px red solid"}}>
                <img src= { require("../images/"+ img +".jpg") } style={{width: "40vw", height: "60vh", objectFit:"contain"}} alt=""></img> 
            </div>
        <div style={{padding:"2rem"}}>
            <h2>{ nombre }</h2>
                <h5>Color: { color }</h5>
                <h4>${ precio }.00</h4>
                <select htmlFor="tamaño">
                    <label htmlFor="sizes">Seleccione una talla:</label>
                        <option value="default" selected disabled>Tallas:</option>
                        <option value="size6">6</option>
                        <option value="size7">7</option>
                        <option value="size8">8</option>
                        <option value="size9">9</option>
                        <option value="size10">10</option>
                        <option value="size11">11</option>
                </select>
                <p>{ descripcion }</p>
        </div>

        </div>
        
    </Stack>
        
    </>

  )
}
