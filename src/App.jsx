import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

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
      <div>
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={() => handleCategoryChange("Remeras")}>Remeras</button>
          <button onClick={() => handleCategoryChange("Camperas")}>Camperas</button>
          <button onClick={() => handleCategoryChange("Buzos")}>Buzos</button>
          <button onClick={() => handleCategoryChange("Pantalones")}>Pantalones</button>
        </div>
      <div>
        <ItemListContainer selectedCategory={selectedCategory} /> 
      </div>
    </Layout>
  );
}

export default App;
