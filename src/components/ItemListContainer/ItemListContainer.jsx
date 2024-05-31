import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const { categoryName } = useParams();
    const { loading, products } = useProducts(categoryName);
    
    if (loading) return
        <h1>Cargando {categoryName ? categoryName : "todos los productos"} ...</h1>;
    return (
            <ItemList products={products} />
    );
}

export default ItemListContainer;

