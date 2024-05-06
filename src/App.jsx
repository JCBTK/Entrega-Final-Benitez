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

  return (
    
    <Layout>
      <div className="Category--Container">
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
