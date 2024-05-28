import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );

    const addToCart = (product, quantity) => {
        setCart([...cart, { product, quantity }]);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product.id !== productId);
        setCart(updatedCart);
    };
    

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart
        .reduce((acc, item) => {
            return acc + item.product.price * item.quantity;
        }, 0)
        .toFixed(2);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
        >
            {children}
        </CartContext.Provider>
    );
}
