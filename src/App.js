import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Carrito } from "./components/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";

export default function App() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaJb4e8ZgsvUBNdcUarAWgvdVifPULeNk",
  authDomain: "comision31205-8a152.firebaseapp.com",
  projectId: "comision31205-8a152",
  storageBucket: "comision31205-8a152.appspot.com",
  messagingSenderId: "755331442037",
  appId: "1:755331442037:web:ecdbbfa16aac4476339f3c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Inicio" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}
