import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";
import { Footer } from "./components/Footer";
import { Error404 } from "./components/Error404";
import { OrderCheckout } from "./components/OrderCheckout";

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
          <Route path="/Carrito" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/OrderCheckout' element={<OrderCheckout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}
