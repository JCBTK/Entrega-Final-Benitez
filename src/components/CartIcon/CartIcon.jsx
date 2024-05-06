import CartLogo from "./img/Cart.png"

function CartIcon({width,height}) {
    return (
        <a><img src={CartLogo} alt="cartlogo" id="CartLogo" width={width} height={height}
        /></a>
    );
}
export default CartIcon;
