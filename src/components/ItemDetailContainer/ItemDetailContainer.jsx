// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
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
  const { handlePreviousProduct, handleNextProduct } = useNavigation(productId);
  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  if (!product) {
    return <h1>Ese producto no existe</h1>;
  }
  return (
    <div className="item--detail__container">
      <button onClick={handlePreviousProduct} className="navigation-button left"><i class="fi fi-br-angle-double-left"></i></button>
      <ItemDetail item={product} onAddToCart={handleAddToCart} />
      <button onClick={handleNextProduct} className="navigation-button right"><i class="fi fi-br-angle-double-right"></i></button>
    </div>
  );
}
