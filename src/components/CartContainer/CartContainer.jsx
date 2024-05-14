import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css"

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);

    return (
        <div className="pt-3 Carrito">
            <h2 className="text-2xl font-semibold Carrito--Titulo">Mi Carrito</h2>
            <div className="pt-3 flex flex-col gap-5">
                {cart.length === 0 ? (
                    <h1>No hay productos en el carrito</h1>
                ) : (
                    cart.map((item) => {
                        return <CartItem key={item.product.id} item={item} />;
                    })
                )}
            </div>
            <h3 className="text-xl font-semibold mt-3">Total: ${cartTotal}</h3>
            <button className="mt-3 bg-red-400 text-white rounded-md px-2 py-1 item--cart__button" onClick={clearCart}> Vaciar carro </button>
        </div>
    );
}