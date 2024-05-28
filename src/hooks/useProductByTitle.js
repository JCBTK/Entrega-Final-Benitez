import { useEffect, useState } from "react";
import { getProductByTitle } from "../mock/asyncMock";

export default function useProductByTitle(productTitle) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log({ product });
    useEffect(() => {
        getProductByTitle(productTitle)
            .then((product) => {setProduct(product);})
            .finally(() => {setLoading(false);});}, [productTitle]);
    return {
        product,
        loading,
    };
}