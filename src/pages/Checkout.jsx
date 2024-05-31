/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../contexts/CartContext/CartContext';
import './Checkout.css';
import Swal from 'sweetalert2';
import { getFirestore, doc, updateDoc, collection, addDoc } from 'firebase/firestore';

export default function Checkout() {
    
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [direction, setDirection] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !surname) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
        if (cart.length === 0) {
            Swal.fire({
                title: 'Error',
                text: 'El carrito está vacío.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
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
                try {
                    const db = getFirestore();
                    
                    const venta = {
                        name,
                        surname,
                        email,
                        direction,
                        cart,
                        total: cartTotal,
                        date: new Date()
                    };
                    await addDoc(collection(db, 'ventas'), venta);
                    
                    for (const item of cart) {
                        const productId = item.product.id.toString();
                        const productRef = doc(db, 'products', productId);
                        const newStock = item.product.stock - item.quantity;
                        await updateDoc(productRef, {
                            stock: newStock
                        });
                    }
                    
                    clearCart();
                    Swal.fire({
                        title: 'Compra realizada!',
                        text: `Gracias por tu compra, ${name} ${surname}!`,
                        icon: 'success',
                        confirmButtonText: 'volver al inicio'
                    }).then(() => {
                        navigate('/');
                    });
                } catch (error) {
                    console.error('Error al procesar la compra:', error);
                    Swal.fire({
                        title: 'Error',
                        text: 'Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }
        });
    };

    return (
        <div className="pt-3 Checkout">
            <h2 className="text-2xl font-semibold Checkout_Titulo">Solo un paso mas</h2>
            <p>Completa este Formulario para que podamos hacerte el envio</p>
            <form className="pt-3 flex flex-col gap-5 Formulario" onSubmit={handleSubmit}>
                <label className='Casilla'>
                    <p>Nombre:</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className='Casilla'>
                    <p>Apellido:</p>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </label>
                <label className='Casilla'>
                    <p>Email:</p>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className='Casilla'>
                    <p>Enviar a:</p>
                    <input
                        type="text"
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                        required
                    />
                </label>
                <button className="mt-3 bg-green-400 text-white rounded-md px-2 py-1 Button_Submit" type="submit">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
}
