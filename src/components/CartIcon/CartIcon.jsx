import CartLogo from "./img/Cart.png"
import "./CartIcon.css"

function CartIcon() {
    return (
        <a><img src={CartLogo} alt="cartlogo" id="CartLogo"/></a>
    );
}
export default CartIcon;
