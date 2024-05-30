import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const useProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "products", productId);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setProduct(productSnap.data());
      } else {
        setProduct(null);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);
  return { product, loading };
};

export default useProductById;