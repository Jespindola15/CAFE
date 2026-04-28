import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Café</h2>
                    <p>De la Plaza Mitre</p>
                </div>
                
                <div className="footer-links">
                    <a href="#">Inicio</a>
                    <a href="#carta">Carta</a>
                    <a href="#ubicacion">Ubicación</a>
                </div>

                <div className="footer-social">
                    <p>Seguinos</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/elcafedelaplazamitre?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                            <i className="fi fi-brands-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/cafedelaplazasn" target="_blank" rel="noopener noreferrer">
                            <i className="fi fi-brands-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Café de la Plaza · Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
