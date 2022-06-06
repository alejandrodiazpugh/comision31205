import React from 'react'
import ItemCount from './ItemCount'
import swal from 'sweetalert'

export const ItemListContainer = () => {
    const onAdd = () => {
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "OK"
        })
    }

    return (
        <ItemCount stock = { 10 } initial = { 1 } onAdd = { onAdd } />
        )}
