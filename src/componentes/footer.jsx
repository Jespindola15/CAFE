import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Branding y Eslogan */}
                <div className="footer-section brand">
                    <img src="/logo.png" alt="Café Logo" className="footer-logo-img" />
                    <p className="footer-tagline">El clásico punto de encuentro frente a Plaza Mitre.</p>
                </div>
                
                {/* Navegación Rápida */}
                <div className="footer-section links">
                    <h3>Explorar</h3>
                    <div className="footer-links-grid">
                        <a href="#">Inicio</a>
                        <a href="#carta">Menú</a>
                        <a href="#galeria">Galería</a>
                        <a href="#ubicacion">Ubicación</a>
                    </div>
                </div>

                {/* Horarios e Info */}
                <div className="footer-section info">
                    <h3>Horarios</h3>
                    <p>Todos los días</p>
                    <p className="highlight">07:00 AM — 01:00 AM</p>
                    <p className="footer-address">San Nicolás, Buenos Aires</p>
                </div>

                {/* Redes Sociales */}
                <div className="footer-section social">
                    <h3>Seguinos</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/elcafedelaplazamitre/" target="_blank" rel="noreferrer" title="Instagram">
                            <i className="fi fi-brands-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" title="Facebook">
                            <i className="fi fi-brands-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Café de la Plaza Mitre. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
