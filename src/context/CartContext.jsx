import React from 'react'
import { createContext, useState  } from 'react'
export const MiContexto = createContext({})

export default function CartContext({ children }) {
    const[carrito,setCarrito] = useState([]);

    //Borrar todo del carrito
    const clear = () => {
        setCarrito([]);
    }
   
    //Revisa si ya existe el id en el carrito
    const isInCart = (itemId) => {
        return carrito.some(item => item.id === parseInt(itemId)) 
    }
    //Devuelve un carrito sin una instancia de un objeto
    const removeItem = (itemId) => {
        return setCarrito(carrito.filter(prod => prod.id !== itemId));
    }
   
    //Encuentra cantidad de items en carrito - reduce - en el CartWidget
    const getItemQty = () => {
        return carrito.reduce((acc, x) => acc + x.quantity, 0 );
    }

    //Encuentra el precio total del carrito
    const getItemPrice = () => {
        const fallbackArray = [];
        carrito.forEach(item => 
            {
                const totalDeItem = parseInt(item.precio)*parseInt(item.quantity);
                fallbackArray.push(totalDeItem);
            });
            console.log(fallbackArray)
        return fallbackArray.reduce((acc,x) => acc + x, 0)



    }

     //Agregar producto al carrito
     const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        }
        if(isInCart(newItem.id)) {
            const findProduct = carrito.find(prod => prod.id === newItem.id);
            const productIndex = carrito.indexOf(findProduct);
            const fallbackArray = [...carrito];
            fallbackArray[productIndex].quantity += quantity;
            setCarrito(fallbackArray);
        } else {
            setCarrito([...carrito, newItem])
        }
        console.log(carrito);
    }


  return (
    <MiContexto.Provider value={ { carrito, isInCart, clear, removeItem, addItem, getItemQty, getItemPrice } }>
        { children }
    </MiContexto.Provider>
  )
}
