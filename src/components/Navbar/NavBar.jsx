import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./NavBar.css"
import Brand from "../Brand"
import CartWidget from "../Cart/CartWidget"
import CategoryList from "./CategoryList"

import Home from '../../main';
import Camperas from '../../pages/camperas';
import Buzos from '../../pages/buzos';
import Remeras from '../../pages/remeras'; 
import Pantalones from '../../pages/pantalones';

function NavBar (){
    return(
        <div className="Navbar">
            <Brand/>
            <div className="Navi">
                <Router>
                    <div>
                        <CategoryList />
                        <Route path="/" exact component={Home} />
                        <Route path="/camperas" component={Camperas} />
                        <Route path="/buzos" component={Buzos} />
                        <Route path="/remeras" component={Remeras} />
                        <Route path="/pantalones" component={Pantalones} />
                    </div>
                </Router>
                <CategoryList/>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar;
