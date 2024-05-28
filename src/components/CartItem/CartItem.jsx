import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import "../ItemList/Item.css";

export default function CartItem({ item }) {
    const { removeFromCart, } = useContext(CartContext);
    return (
        <div key={item.product.id} className="flex items-center justify-between item__container">
            <div className="flex gap-5 items-center">
                <div className="max-w-[50px] item--img__container">
                    <img src={item.product.image} alt={item.product.title} className="item--img" />
                </div>
                <div>
                    <p>{item.product.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.product.price}</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="px-1 rounded-full bg-slate-300" onClick={() => removeFromCart(item.product.id)}>
                    Eliminar del Carrito
                </button>
            </div>
        </div>
    );
}
