import React, { useEffect } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const CATEGORIAS_ROPA = [
    { path: "/", label: "Inicio" },
    { path: "/category/Camperas", label: "Camperas" },
    { path: "/category/Buzos", label: "Buzos" },
    { path: "/category/Remeras", label: "Remeras" },
    { path: "/category/Pantalones", label: "Pantalones" },
];

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
                <ul className="category--list nav-list">
                    {CATEGORIAS_ROPA.map((ruta) => (
                        <li key={ruta.path}>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={ruta.path}>
                                {ruta.label}
                            </NavLink>
                        </li>
                    ))}
                    <CartWidget className="carrito" />
                </ul>
            </nav>
        </header>
    );
}

export default CategoryList;
