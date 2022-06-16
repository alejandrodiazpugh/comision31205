import React, { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getItem = new Promise((res) => {
            setTimeout(() => {
                res([
                    {id: 1, nombre: "Air Jordan 1 High", descripcion: "Los originales. Los que comenzaron todo. Los que llevaron a Nike a pagar multas por cada vez que MJ los utilizaba por ser considerados ilegales. Tienes que tener un par.", img: "aj1", precio: 2500, color: "Rojo"}
                ])
            }, 2000)
        })
        getItem.then((result) => {
            setDetails(result);
        }

        )
    }, [])

  return (
    <div style={{marginBlock: '10rem'}}>
       {details.map(detail => <ItemDetail key = { detail.id } detail = { detail } />)}
    </div>
  )
}
