import React from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductByCategory } from "../../mock/asyncMock";

function ItemListContainer({ selectedCategory }) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                let data;
                if (selectedCategory && selectedCategory !== "Home") {
                    data = await getProductByCategory(selectedCategory);
                } else {
                    data = await getProducts();
                }
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCategory]);

    if (loading) return <h1>Cargando...</h1>;

    return (
        <div className="Items--Complete">
            <ItemList products={products} />
        </div>
        
    );
}

export default ItemListContainer;
