import React from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = () => {

    const onAdd = () => {

    }

    return (
        <ItemCount stock = "20" initial = "1" onAdd = { onAdd }/>
        )}
