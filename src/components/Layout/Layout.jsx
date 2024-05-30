import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import "./Layout.css";

export default function Layout({ children }) {
    return (
        <>
        <div className="header__wrapper py-2 ">
            <Brand />
            <NavBar />
        </div>
        <div className="layout--container">
            <main className="main--container">{children}</main>
        </div>
        <Footer/>
        </>
    );
}