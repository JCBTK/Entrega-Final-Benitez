import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const isCartEmpty = cart.length === 0;

    return (
        <div className="Complete_Cart">
            <div className="Cart_Container_Mas_Title">
                {!isCartEmpty && <h2 className="Cart_Title">Mi carrito de compras</h2>}
                <div className="Cart_Container">
                    {isCartEmpty ? (
                        <div className="Carrito_Vacio">
                            <h1>No hay productos en el carrito</h1>
                            <Link className="button" to="/">Volver al inicio</Link>
                        </div>
                    ) : (
                    cart.map((item) => (
                        <CartItem key={item.product.id} item={item} />
                    ))
                )}
                </div>
            </div>
            {!isCartEmpty && (
                <div className="Cart_Aside">
                    <h3 className="text-xl font-semibold mt-3 Total">Total: ${cartTotal}</h3>
                    <div className="botonera">
                        <Link to="/"><button className="button" onClick={clearCart}>Vaciar <i className="fi fi-rr-trash"></i></button></Link>
                        <br></br>
                        <Link to="/checkout"><button className="button">Pagar<i className="fi fi-rr-shopping-cart-check"></i></button></Link>
                    </div>
                </div>)}
        </div>
    );
}
