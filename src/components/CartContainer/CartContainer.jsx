import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartContainer.module.css";

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);

    return (
        <div className={`${styles.container} pt-3`}>
            <h2 className="text-2xl font-semibold">Mi Carro</h2>
            <div className="pt-3 flex flex-col gap-5">
                {cart.length === 0 ? (
                    <>
                        <h1>No hay productos en el carrito</h1>
                        <Link className={`${styles.button} mt-3`} to="/">Volver al inicio</Link>
                    </>
                ) : (
                    cart.map((item, index) => <CartItem key={index} item={item} />)
                )}
            </div>
            {cart.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold mt-3">Total: ${cartTotal}</h3>
                    <div className={styles.botonera}>
                        <button className={styles.button} onClick={clearCart}>Vaciar carro</button>
                        <Link className={styles.button} to="/checkout">Terminar mi compra</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
