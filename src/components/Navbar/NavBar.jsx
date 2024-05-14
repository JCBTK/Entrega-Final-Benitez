import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";
import CartContext from "../../contexts/CartContext/CartContext";

export default function NavBar() {
    const { cart } = useContext(CartContext);
    return (
        <div className="Navbar--Right">
            <CategoryList />
            <div className={`${cart.length === 0 ? "hidden" : ""}`}>
                <CartWidget />
            </div>
        </div>
    );
}