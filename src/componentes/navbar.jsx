import { useState } from 'react'
import "./navbar.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav-logo">
                <h1>Café</h1>
            </div>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                <li><a href="#carta" onClick={() => setMenuOpen(false)}>Carta</a></li>
                <li><a href="#ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</a></li>
            </ul>
        </nav>
    )
}


