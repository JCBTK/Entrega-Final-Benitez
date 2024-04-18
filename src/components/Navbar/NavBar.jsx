import "./NavBar.css"
import Brand from "../Brand"
import CartWidget from "../Cart/CartWidget"
import CategoryList from "./CategoryList"


function NavBar (){
    return(
        <div className="Navbar">
            <Brand/>
            <div className="Navi">
                <CategoryList/>
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar;