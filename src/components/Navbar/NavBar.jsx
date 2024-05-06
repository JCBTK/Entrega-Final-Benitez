import React from 'react';
import { Link } from 'react-router-dom';
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css"

function NavBar (){
    return(
        <div className="Navbar">
            <div className="Navi">
                <CategoryList/>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;
