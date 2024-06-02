/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function CategoryList() {
    useEffect(() => {
        const nav = document.querySelector("#nav");
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");

        if (abrir) {
            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            });
        }

        if (cerrar) {
            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            });
        }
        
        return () => {
            if (abrir) {
                abrir.removeEventListener("click", () => {
                    nav.classList.add("visible");
                });
            }

            if (cerrar) {
                cerrar.removeEventListener("click", () => {
                    nav.classList.remove("visible");
                });
            }
        };
    }, []);

    return (
        <header>
            <button id="abrir" className="abrir-menu"><i className="bi bi-list"></i></button>
            <nav className="nav" id="nav">
                <button className="cerrar-menu" id="cerrar"><i className="bi bi-x"></i></button>
                <ul className="Navbar ul1">
                    <li className="li1"><NavLink to="/">Inicio</NavLink></li>
                    <li className="li1">Categorias
                        <ul className="ul2">
                            <li className="li2"><NavLink to="/category/Camperas">Camperas</NavLink></li>
                            <li className="li2"><NavLink to="/category/Buzos">Buzos</NavLink></li>
                            <li className="li2"><NavLink to="/category/Remeras">Remeras</NavLink></li>
                            <li className="li2"><NavLink to="/category/Pantalones">Pantalones</NavLink></li>
                        </ul>
                    </li>
                    <CartWidget className="carrito" />
                </ul>
                
            </nav>
        </header>
    );
}

export default CategoryList;
