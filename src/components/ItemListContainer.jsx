import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const productos = new Promise((res) => {
            setTimeout(() => {
              res([
                {id :1, nombre: "Air Jordan 1 High", color: "rojo", precio: 2500, stock: 10, img: "aj1", descripcion: "Los originales. Los que comenzaron todo. Los que llevaron a Nike a pagar multas por cada vez que MJ los utilizaba por ser considerados ilegales. Tienes que tener un par."},
                {id: 2, nombre: "Air Jordan XI", color: "negro", precio: 12000, stock: 20, img: "aj2",  descripcion: "La temporada 95-96 de los Chicago Bulls es legendaria. Y estos son los tenis legendarios que la acompañaron. No son fáciles de conseguir, aparta ya tu par."},
                {id :3, nombre: "Air Jordan IV", color: "café", precio: 8000, stock: 20, img: "aj3", descripcion: "1989. Chicago contra Cleveland. 99 puntos a 100. Quedan 3 segundos en el reloj. Jordan tiene el balón y sus Air IV. Tú sabes que pasó después."},
                {id :4, nombre: "Air Jordan XII", color: "rojo/negro", precio: 5000, stock: 9, img: "aj4", descripcion: "Intercambia el flash de los Jordan tradicionales por un look más refinado y potente. Tan potente que ni un resfriado te puede hacer perder un juego."},
                {id :5, nombre: "Air Jordan II", color: "blanco", precio: 3500, stock: 15, img: "aj5", descripcion: "Hay pocas secuelas mejor que la original. El Padrino, Batman, Mamma Mía, y los Jordans."},
                {id :6, nombre: "Air Jordan XIV", color: "negro", precio: 13000, stock: 10, img: "aj6", descripcion: "Si la temporada de 1998 terminó con un juego físico y lleno de ataques, la gente no la recuerda así. Como sí la recuerda es como el juego de los tenis Ferrari."}
              ]);
            }, 2000);
          });
      
          productos
            .then((result) => {
              setItems(result);
            })
            .catch(() => {
              setError(true);
              console.log(error);
            })
            .finally(()=> {
                setLoading(false);
            })
    },[]);


    return (
        <>
        <div>
            <h3  style={{marginTop: "5rem"}}>{loading && "Cargando productos..."}</h3>
        </div>
         <ItemList items = { items }/>
        </>
       
        )
    }
