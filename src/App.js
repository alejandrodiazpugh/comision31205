import React, { useState } from 'react';
import './App.css';
import { Navbar } from './componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div className="App">
      <Navbar setCart = { setCart } />
      <ItemListContainer cart = { cart }/>
    </div>
  );
}

export default App;
