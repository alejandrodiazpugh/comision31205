import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "./Loading";

export function ItemDetailContainer() {
    const { itemId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let inventarioMock = [
      {
        id: 1,
        category: "Jordan",
        nombre: "Air Jordan 1 High",
        color: "rojo",
        precio: 2500,
        stock: 10,
        img: "aj1",
        descripcion:
          "Los originales. Los que comenzaron todo. Los que llevaron a Nike a pagar multas por cada vez que MJ los utilizaba por ser considerados ilegales. Tienes que tener un par.",
      },
      {
        id: 2,
        category: "Jordan",
        nombre: "Air Jordan XI",
        color: "negro",
        precio: 12000,
        stock: 20,
        img: "aj2",
        descripcion:
          "La temporada 95-96 de los Chicago Bulls es legendaria. Y estos son los tenis legendarios que la acompañaron. No son fáciles de conseguir, aparta ya tu par.",
      },
      {
        id: 3,
        category: "Jordan",
        nombre: "Air Jordan IV",
        color: "negro",
        precio: 8000,
        stock: 20,
        img: "aj3",
        descripcion:
          "1989. Chicago contra Cleveland. 99 puntos a 100. Quedan 3 segundos en el reloj. Jordan tiene el balón y sus Air IV. Tú sabes que pasó después.",
      },
      {
        id: 4,
        category: "Jordan",
        nombre: "Air Jordan XII",
        color: "rojo/negro",
        precio: 5000,
        stock: 9,
        img: "aj4",
        descripcion:
          "Intercambia el flash de los Jordan tradicionales por un look más refinado y potente. Tan potente que ni un resfriado te puede hacer perder un juego.",
      },
      {
        id: 5,
        category: "Jordan",
        nombre: "Air Jordan II",
        color: "blanco",
        precio: 3500,
        stock: 15,
        img: "aj5",
        descripcion:
          "Hay pocas secuelas mejor que la original. El Padrino, Batman, Mamma Mía, y los Jordans.",
      },
      {
        id: 6,
        category: "Jordan",
        nombre: "Air Jordan XIV",
        color: "negro",
        precio: 13000,
        stock: 10,
        img: "aj6",
        descripcion:
          "Si la temporada de 1998 terminó con un juego físico y lleno de ataques, la gente no la recuerda así. Como sí la recuerda es como el juego de los tenis Ferrari.",
      },
      {
        id: 7,
        category: "Yeezy",
        nombre: "700",
        color: "Gris con acentos",
        precio: 11000,
        stock: 8,
        img: "ye1",
        descripcion: "¿Quién dijo que usar tenis de papá tenian que ser horribles.",
      },
      {
        id: 8,
        category: "Yeezy",
        nombre: "350 v2",
        color: "Blanco con negro",
        precio: 15000,
        stock: 30,
        img: "ye2",
        descripcion: "Los tenis más populares del mundo.",
      },
      {
        id: 9,
        category: "Yeezy",
        nombre: "500",
        color: "Verde Olivo",
        precio: 10000,
        stock: 20,
        img: "ye3",
        descripcion:
          "Volviendo a los años 90, estos tenis son perfectos para los años 20.",
      },
      {
        id: 10,
        category: "Yeezy",
        nombre: "QNTM",
        color: "Azul con blanco/negro",
        precio: 16000,
        stock: 10,
        img: "ye4",
        descripcion:
          "Si prefieres una mezcla perfecta entre los Ye y los Jordan, estos tenis son para ti.",
      },
      {
        id: 11,
        category: "Yeezy",
        nombre: "700 v3",
        color: "Gris",
        precio: 9000,
        stock: 15,
        img: "ye5",
        descripcion: "El concepto: un asado en la luna. La ejecución: perfecta.",
      },
      {
        id: 12,
        category: "Yeezy",
        nombre: "700 v2",
        color: "Gris",
        precio: 12000,
        stock: 9,
        img: "ye6",
        descripcion: "Si no está roto, no hay porque arreglarlo.",
      },
      {
        id: 13,
        category: "Yeezy",
        nombre: "350",
        color: "Gris",
        precio: 13000,
        stock: 20,
        img: "ye7",
        descripcion:
          "Los tenis más influyentes del Siglo XXI. Tienes que tener un par.",
      },
      {
        id: 14,
        category: "Converse",
        nombre: "Chuck Taylor All Star High Top",
        color: "Negro",
        precio: 2000,
        stock: 40,
        img: "Converse1",
        descripcion: "Los clásicos.",
      },
      {
        id: 16,
        category: "Converse",
        nombre: "Pro Leather Sneakers",
        color: "Blanco con azul",
        precio: 3000,
        stock: 20,
        img: "Converse3",
        descripcion: "Los clásicos.",
      },
      {
        id: 17,
        category: "Converse",
        nombre: "Cons One Star Classic Suede",
        color: "Mostaza",
        precio: 3500,
        stock: 30,
        img: "Converse4",
        descripcion: "Los clásicos",
      },
    ];

    useEffect(() => {
        const getItem = new Promise((res) => {
            setTimeout(() => {
              res(inventarioMock.find(item => item.id === parseInt(itemId)))
            }, 2000)
        })
        getItem.then((result) => {
            setProducts(result);
            setLoading(false);
           
        })
    }, [itemId])


  return (
    <div style={{marginBlock: '10rem'}}>
     {loading ? <Loading /> : <ItemDetail detail = { products } /> }
    </div>
  )
}
