import React from 'react';
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <>
    <section style={ {display:"flex", flexWrap:"wrap", justifyContent: "center", alignItems:"center"} }>
        {items.map(item => <Item key={item.id} item = { item } />)}
    </section>
    </>
    
  )
}
