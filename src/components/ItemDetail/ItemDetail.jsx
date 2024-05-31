/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export default function ItemDetail({ item, onAddToCart }) {
  const { count, increment, decrement, reset } = useCount(0);
  const handleAddToCart = () => {
    onAddToCart(item, count);
    reset();
  };
  return (
    <div className="item_detail_container">
      <div className="item_detail_img-container">
        <img className="item_detail_img" src={item.image} alt={item.title} />
      </div>
      <div className="item_detail_desciprion--box">
        <h2 className="item_detail_title">{item.title}</h2>
        <p className="item_detail_description">{item.description}</p>
        <p className="item_detail_price">${item.price}</p>
        <p> Existen <strong>{item.stock - count}</strong> unidades disponibles</p>
      </div>
      {item.stock > 0 ? (
        <div className="Btnes">
          <div className="item_detail_counter--container">
            <ItemCount stock={item.stock} count={count} increment={increment} decrement={decrement}/>
          </div>
          <div className="item_detail_cart-container">
            <button className="item_detail_cart-button" onClick={handleAddToCart} disabled={count === 0}><i className="fi fi-rr-shopping-cart-add"></i> Agregar al carro</button>
          </div>
          
        </div>
      ) : (
        <p className="no-stock">No hay stock de este producto</p>
      )}
    </div>
  );
}