import React from 'react';
import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ProductsCard from './components/Products/ProductsCard';

function App() {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <ItemListContainer Greeting="Hola Mundo!" />
        <ProductsCard/>
      </main>
    </div>
  )
}

export default App;
