import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';

function RemerasPage() {
    const { products, isLoading } = useProducts();
    if (isLoading) {
        return <div>Cargando...</div>;
    }
    const productosRemeras = products.filter(producto => producto.category === "Remeras");
    return (
        <div>
            <h1>Remeras</h1>
            <ItemList products={productosRemeras} />
        </div>
    );
}

export default RemerasPage;
