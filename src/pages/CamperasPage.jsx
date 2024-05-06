
// Archivo: CamperasPage.jsx
import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';

function CamperasPage() {
    const { products, isLoading } = useProducts();

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    const productosCamperas = products.filter(producto => producto.category === "Camperas");

    return (
        <div>
            <h1>Camperas</h1>
            <ItemList products={productosCamperas} />
        </div>
    );
}

export default CamperasPage;
