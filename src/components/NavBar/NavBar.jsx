import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/img/logo.png"
import "./navbar.css"
import Carrito from "./carroDeCompras/Carrito"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Izquierda: Logo y nombre */}
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-title">e-commerse</span>
                </Link>
                
                {/* Centro: Menú */}
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/category/deportiva">Ropa Deportiva</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/category/casual">Ropa Casual</NavLink>
                    </li>
                </ul>
                
                {/* Derecha: Carrito */}
                <Carrito />
            </div>
        </nav>
    )
}

export default NavBar