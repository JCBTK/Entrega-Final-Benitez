import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';

function BuzosPage() {
    const { products, isLoading } = useProducts();
    if (isLoading) {
        return <div>Cargando Buzos...</div>;
    }
    const productosBuzos = products.filter(producto => producto.category === "Buzos");
    return (
        <div>
            <h1>Buzos</h1>
            <ItemList products={productosBuzos} />
        </div>
    );
}

export default BuzosPage;
