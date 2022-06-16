import React from 'react';
import Item from "./Item";

export default function ItemList({ items }) {

    console.log(items)
  return (
    <>
    <div style={ {display:"flex", flexWrap:"wrap", justifyContent: "center"} }>
        {items.map(item => <Item key={item.id} item = { item } />)}
    </div>
    </>
    
  )
}
