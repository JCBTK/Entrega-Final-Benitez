import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const useNavigation = (currentProductid, setLoading) => {
    const navigate = useNavigate();
    const [productids, setProductids] = useState([]);
    const [isFirstProduct, setIsFirstProduct] = useState(false);
    const [isLastProduct, setIsLastProduct] = useState(false);

    useEffect(() => {
        const fetchProductids = async () => {
            const db = getFirestore();
            const productsCollection = collection(db, "products");
            const productsQuery = query(productsCollection, orderBy("id"));
            const querySnapshot = await getDocs(productsQuery);
            const ids = querySnapshot.docs.map(doc => doc.id);
            setProductids(ids);
            const currentIndex = ids.indexOf(currentProductid);
            setIsFirstProduct(currentIndex === 0);
            setIsLastProduct(currentIndex === ids.length - 1);
        };
        fetchProductids();
    }, [currentProductid]);

    const handlePreviousProduct = () => {
        const currentIndex = productids.indexOf(currentProductid);
        if (currentIndex > 0) {
            setLoading(true);
            setTimeout(() => {
                const previousProductid = productids[currentIndex - 1];
                navigate(`/product/${previousProductid}`);
            },);
        }
    };

    const handleNextProduct = () => {
        const currentIndex = productids.indexOf(currentProductid);
        if (currentIndex < productids.length - 1) {
            setLoading(true);
            setTimeout(() => {
                const nextProductid = productids[currentIndex + 1];
                navigate(`/product/${nextProductid}`);
            }, );
        }
    };

    useEffect(() => {
        const currentIndex = productids.indexOf(currentProductid);
        setIsFirstProduct(currentIndex === 0);
        setIsLastProduct(currentIndex === productids.length - 1);
    }, [currentProductid, productids]);

    return {
        handlePreviousProduct,
        handleNextProduct,
        isFirstProduct,
        isLastProduct,
    };
};

export default useNavigation;
