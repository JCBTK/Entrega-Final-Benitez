import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const useNavigation = (currentProductId) => {
    const navigate = useNavigate();
    const [productIds, setProductIds] = useState([]);

    useEffect(() => {
        const fetchProductIds = async () => {
            const db = getFirestore();
            const productsCollection = collection(db, "products");
            const productsQuery = query(productsCollection, orderBy("Id"));
            const querySnapshot = await getDocs(productsQuery);
            const ids = querySnapshot.docs.map(doc => doc.id);
            setProductIds(ids);
        };
        fetchProductIds();
    }, []);
    const handlePreviousProduct = () => {
        const currentIndex = productIds.indexOf(currentProductId);
        if (currentIndex > 0) {
            const previousProductId = productIds[currentIndex - 1];
            navigate(`/product/${previousProductId}`);
        }
    };
    const handleNextProduct = () => {
        const currentIndex = productIds.indexOf(currentProductId);
        if (currentIndex < productIds.length - 1) {
            const nextProductId = productIds[currentIndex + 1];
            navigate(`/product/${nextProductId}`);
        }
    };
    return {
        handlePreviousProduct,
        handleNextProduct,
    };
};

export default useNavigation;
