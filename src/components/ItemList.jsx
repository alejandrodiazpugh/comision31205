import React from 'react';
import { Hero } from './Hero';
import Item from "./Item";
import "../css/main.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ItemList({ items }) {

  const [displayHero, setDisplayHero] = useState(true);
  const location = useLocation()

  //renderiza el Hero solo en la página de inicio
  useEffect(() => {
    if((location.pathname !== '/Inicio') && (location.pathname !== '/')) {
      setDisplayHero(false)
    } else {
      setDisplayHero(true)
    }
    console.log(location.pathname);
    
  })
  return (
    <>
    {displayHero ? <Hero /> : ''}
    <section className="itemListCardSection">
        {items.map(item => <Item key={item.id} item = { item } />)}
    </section>
    </>
    
  )
}
