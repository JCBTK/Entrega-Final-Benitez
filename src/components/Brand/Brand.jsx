import "./Brand.css"
import { Link } from 'react-router-dom';

function Brand() {
    return (
        <div>
            <Link to="/home" className="Brand"><h1 className="Brand">TK Shop</h1></Link>
        </div>
    );
}

export default Brand;