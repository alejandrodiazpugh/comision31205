import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {


  const [cart, setCart] = useState(0);

  return (
    <BrowserRouter>
    <Navbar setCart = { setCart } />
    <Routes>
      <Route path='/' element={<ItemListContainer cart = { cart }/>} />
      <Route path='/Inicio' element={<ItemListContainer cart = { cart } />} />
      <Route path='/category/:categoryId' element={<ItemListContainer cart = { cart }/>} />
      <Route path= '/item/:itemId' element={<ItemDetailContainer/>} />
    </Routes>
      </BrowserRouter>
  );
}
