import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../contexts/CartContext/CartContext';
import './Checkout.css';
import Swal from 'sweetalert2';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

export default function Checkout() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && surname) {
            const productList = cart.map(item => `${item.product.title} (x${item.quantity}): $${item.product.price * item.quantity}`).join('<br/>');
            Swal.fire({
                title: 'Resumen de compra',
                html: `${productList}<br/><br/>Total: $${cartTotal}`,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Confirmar compra',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const db = getFirestore();

                    // Actualiza el stock de los productos en Firestore
                    for (const item of cart) {
                        const productRef = doc(db, "products", item.product.id);
                        await updateDoc(productRef, {
                            stock: item.product.stock - item.quantity
                        });
                    }

                    clearCart();
                    Swal.fire({
                        title: 'Compra realizada!',
                        text: `Gracias por tu compra, ${name} ${surname}!`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        navigate('/');
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="pt-3 Checkout">
            <h2 className="text-2xl font-semibold Checkout--Titulo">Finalizar Compra</h2>
            <form className="pt-3 flex flex-col gap-5" onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </label>
                <button className="mt-3 bg-green-400 text-white rounded-md px-2 py-1" type="submit">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
}
