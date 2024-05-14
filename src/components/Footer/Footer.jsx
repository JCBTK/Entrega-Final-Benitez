import "./Footer.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Link to="/" className="footer" target="_self">
            <p>© 2024 TK Shop. All rights reserved.</p>
        </Link>
    );
}