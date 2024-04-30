import React, { useState, useEffect } from 'react';

function ProductsCard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="App">
            <h1>Productos de Ropa</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Precio: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsCard;
