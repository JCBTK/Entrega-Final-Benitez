import { useState } from "react";
import CartIcon from "../CartIcon/CartIcon"
import "./CartWidget.css"

function CartWidget(){
    const [cartItems, setCartItems ]= useState(4)

    return(
        <>
        <div className="Carrito">
            <CartIcon width={50} height={50} id="CarroLogo"/>
            <span>{cartItems}</span>
        </div>
        </>
    )
}
export default CartWidget;
