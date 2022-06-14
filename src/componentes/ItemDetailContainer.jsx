import React, { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getItem = new Promise((res) => {
            setTimeout(() => {
                res([
                    {id: 1, nombre: "Air Jordan 1 High", descripcion: "Los originales. Los que comenzaron todo. Los que llevaron a Nike a pagar multas por cada vez que MJ los utilizaba por ser considerados ilegales. Tienes que tener un par.", img: "aj1", precio: 2500, color: "Rojo"},
                    {id: 2, nombre: "Air Jordan XI", descripcion: "La temporada 95-96 de los Chicago Bulls es legendaria. Y estos son los tenis legendarios que la acompañaron. No son fáciles de conseguir, aparta ya tu par.", img: "aj2", precio: 12000, color: "Negro"},
                    {id: 3, nombre: "Air Jordan IV", descripcion: "1989. Chicago contra Cleveland. 99 puntos a 100. Quedan 3 segundos en el reloj. Jordan tiene el balón y sus Air IV. Tú sabes que pasó después.", img: "aj3", precio: 8000, color: "Negro"},
                    {id: 4, nombre: "Air Jordan XII", descripcion: "Intercambia el flash de los Jordan tradicionales por un look más refinado y potente. Tan potente que ni un resfriado te puede hacer perder un juego.", img: "aj4", precio: 5000,color: "Rojo/Negro"},
                    {id: 5, nombre: "Air Jordan II", descripcion: "Hay pocas secuelas mejor que la original. El Padrino, Batman, Mamma Mía, y los Jordans.", img: "aj5", precio: 3500, color: "Blanco"},
                    {id: 6, nombre: "Air Jordan XIV", descripcion: "Si la temporada de 1998 terminó con un juego físico y lleno de ataques, la gente no la recuerda así. Como sí la recuerda es como el juego de los tenis Ferrari.", img: "aj6", precio: 13000, color: "Negro"},
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
