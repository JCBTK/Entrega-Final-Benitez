import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleHomeClick = () => {
    setSelectedCategory(null);
  };

  // Objeto que mapea cada categoría a un color de fondo
  const categoryColors = {
    "Remeras": "#e10186",
    "Camperas": "#8fdbfe",
    "Buzos": "#fcfa75",
    "Pantalones": "#9064a9"
  };

  return (
    <Layout>
      <div className="Category--Container" style={{ backgroundColor: selectedCategory ? categoryColors[selectedCategory] : "#00da95" }}>
        <button className="Category--Container__Button" onClick={handleHomeClick}>Home</button>
        <button className="Category--Container__Button" onClick={() => handleCategoryChange("Remeras")}>Remeras</button>
        <button className="Category--Container__Button" onClick={() => handleCategoryChange("Camperas")}>Camperas</button>
        <button className="Category--Container__Button" onClick={() => handleCategoryChange("Buzos")}>Buzos</button>
        <button className="Category--Container__Button" onClick={() => handleCategoryChange("Pantalones")}>Pantalones</button>
      </div>
      <div>
        <ItemListContainer selectedCategory={selectedCategory} /> 
      </div>
    </Layout>
  );
}

export default App;
