import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useProducts(categoryName) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        let productsCollection = collection(db, "products");

        if (categoryName) {
            productsCollection = query(productsCollection, where("category", "==", categoryName));
        }

        getDocs(productsCollection)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryName]);

    return { products, loading };
}
