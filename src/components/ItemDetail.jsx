import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Stack, Button, ButtonGroup } from "react-bootstrap" 
import swal from 'sweetalert';
import { Link } from "react-router-dom"

export function ItemDetail({ detail }) {
    const { nombre, descripcion, img, precio, color, stock } = detail;
    const[dismount, setDismount] = useState(false);

    const onAdd = () => {
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "Volver a la tienda",
            button: "OK"
        })
        setTimeout(setDismount(true),1000);   
    }

  return (
    <>
    <Stack gap={3}>
        <div style={{display: "flex", alignItems:"center", borderRadius: "0.5rem", backgroundColor:"white"}}>
            <div>
                <img src= { require("../images/"+ img +".jpg") } style={{width: "45vw", height: "80vh", objectFit:"contain"}} alt=""></img> 
            </div>
        <div style={{display: "flex", flexDirection:"column", alignItems:"center "}}>
            <h2>{ nombre }</h2>
                <h5>Color: { color }</h5>
                <h6>Precio: <span style={{fontWeight:"bold"}}> ${ precio }.00 </span></h6>
                <select htmlFor="meses">
                    <option value="default" disabled defaultValue={"Seleccionar"}>Pago a:</option>
                    <option value="size6">1 pago de ${ precio }</option>
                    <option value="size7">3 pagos de ${ (precio / 3).toPrecision(5) }</option>
                    <option value="size8">6 pagos de ${ (precio / 6).toPrecision(5) }</option>
                </select>
                <h6>Talla:</h6>
                <ButtonGroup className='me-3'>
                    <Button variant="secondary">26cm</Button>
                    <Button variant="secondary">27cm</Button>
                    <Button variant="secondary">28cm</Button>
                    <Button variant="secondary">29cm</Button>
                    <Button variant="secondary">30cm</Button>
                    <Button variant="secondary">31cm</Button>  
                </ButtonGroup>
                <p style={{marginInline: "10rem", marginBlock: "5rem"}}>{ descripcion }</p>
                {dismount ? <div style={{marginInline:"10rem", display:"flex", flexDirection:"column", alignItems: "center", gap: "1rem"}}>
                                <Link to="/"><Button variant="secondary" >Volver a la tienda</Button></Link> 
                                <Link to="/Carrito"><Button variant="success" >Finalizar compra</Button></Link> 
                            </div> 
                        : <ItemCount stock={ stock } initial={ 1 } onAdd = {onAdd}/> }
                
        </div>

        </div>
        
    </Stack>
    </>

  )
}
