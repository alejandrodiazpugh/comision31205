import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Carrito } from "./components/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";

export default function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Inicio" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}
