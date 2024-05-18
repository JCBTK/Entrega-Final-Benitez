import "./CartWidget.css";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";

function CartWidget() {
    const { cart } = useContext(CartContext);
    const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <Link to={"/cart"}>
            <div className="Carrito--Widget">
                <CartIcon width={4} height={4} id="CarroLogo"/>
                <span>{calculateQuantity}</span>
            </div>
        </Link>
    );
}

export default CartWidget;