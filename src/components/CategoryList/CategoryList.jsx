import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const CATEGORIAS_ROPA = [
    {path: "/",label: "Inicio",}
    ,
    {path: "/category/Camperas",label: "Camperas",}
    ,
    {path: "/category/Buzos",label: "Buzos",}
    ,
    {path: "/category/Remeras",label: "Remeras",}
    ,
    {path: "/category/Pantalones",label: "Pantalones",},
];

function CategoryList() {
    return (
        <nav>
            <ul className="category--list">
                {CATEGORIAS_ROPA.map((ruta) => (
                    <li key={ruta.path}>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={ruta.path}>
                            {ruta.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>);}
export default CategoryList;