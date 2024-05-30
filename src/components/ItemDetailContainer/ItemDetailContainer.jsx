/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useProductById from "../../hooks/useProductById";
import CartContext from "../../contexts/CartContext/CartContext";
import useNavigation from "../../hooks/useNavigation";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const { loading, product } = useProductById(productId);
  const { addToCart } = useContext(CartContext);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const { handlePreviousProduct, handleNextProduct, isFirstProduct, isLastProduct } = useNavigation(productId, setIsLoadingProduct);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
  };

  useEffect(() => {
    if (!loading) {
      setIsLoadingProduct(false);
    }
  }, [loading, productId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (!product) {
    return <h1>Ese producto no existe</h1>;
  }

  return (
    <div className="item--detail__container">
        <>
          <button onClick={handlePreviousProduct} className="navigation-button left" disabled={isFirstProduct}>
            <i className="fi fi-sr-angle-circle-left"></i>
          </button>
          <ItemDetail item={product} onAddToCart={handleAddToCart} />
          <button onClick={handleNextProduct} className="navigation-button right" disabled={isLastProduct}>
            <i className="fi fi-sr-angle-circle-right"></i>
          </button>
        </>
    </div>
  );
}
