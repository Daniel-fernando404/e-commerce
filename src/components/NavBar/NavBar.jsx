import Logo from "../../assets/img/logo.png"
import "./navbar.css"
import Carrito from "./carroDeCompras/Carrito"

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Izquierda: Logo y nombre */}
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-title">e-commerse</span>
                </a>
                {/* Centro: Menú */}
                <ul className="navbar-nav flex-row mx-auto">
                    <li className="nav-item mx-2">
                        <a className="nav-link active" href="#">Tienda</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Acerca de</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                {/* Derecha: Carrito */}
                <Carrito />
            </div>
        </nav>
    )
}
export default NavBar;