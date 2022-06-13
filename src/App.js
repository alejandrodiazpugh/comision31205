import React, { useState } from 'react';
import './App.css';
import { Navbar } from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div className="App">
      <Navbar setCart = { setCart } />
      <ItemListContainer cart = { cart }/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
