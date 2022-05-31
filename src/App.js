import React from 'react';
import './App.css';
import { Navbar } from './componentes/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
