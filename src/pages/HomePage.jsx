
import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';

function HomePage() {
    const { products, isLoading } = useProducts();
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Inicio</h1>
            <ItemList products={products} />
        </div>
    );
}

export default HomePage;
