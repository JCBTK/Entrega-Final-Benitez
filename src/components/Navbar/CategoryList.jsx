import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList(){
    return(
        <div>
            <nav>
                <ul className="ListadoDeCategorias">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/camperas">Camperas</Link></li>
                    <li><Link to="/buzos">Buzos</Link></li>
                    <li><Link to="/remeras">Remeras</Link></li>
                    <li><Link to="/pantalones">Pantalones</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryList;
