
import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';

function PantalonesPage() {
    const { products, isLoading } = useProducts('Pantalones');

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Pantalones</h1>
            <ItemList products={products} />
        </div>
    );
}

export default PantalonesPage;
