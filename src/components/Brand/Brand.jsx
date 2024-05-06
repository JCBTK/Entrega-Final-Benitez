import "./Brand.css";
import { Link } from 'react-router-dom';

function Brand() {
    return (
        <div>
            <Link to="/recargada" className="Brand" target="_self">
                <h1 className="Brand">TK Shop</h1>
            </Link>
        </div>
    );
}

export default Brand;
