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
                {id :1, nombre: "Air Jordan 1 High", color: "rojo", precio: 2500, stock: 10, img: "aj1"},
                {id: 2, nombre: "Air Jordan XI", color: "negro", precio: 12000, stock: 20, img: "aj2"},
                {id :3, nombre: "Air Jordan IV", color: "café", precio: 8000, stock: 20, img: "aj3"},
                {id :4, nombre: "Air Jordan XII", color: "rojo/negro", precio: 5000, stock: 9, img: "aj4"},
                {id :5, nombre: "Air Jordan II", color: "blanco", precio: 3500, stock: 15, img: "aj5"},
                {id :6, nombre: "Air Jordan XIV", color: "negro", precio: 13000, stock: 10, img: "aj6"}
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
