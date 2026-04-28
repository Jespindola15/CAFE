import './ubicacion.css'

export default function Ubicacion() {
    return (
        <section className="ubicacion-section" id="ubicacion">
            <div className="ubicacion-container">
                <div className="ubicacion-info">
                    <p className="ubicacion-iconica">Nuestra esquina icónica</p>
                    <h2>Donde encontrarnos</h2>
                    <p className="ubicacion-desc">Frente a la emblemática Plaza Mitre, en el corazón de San Nicolás.</p>
                    
                    <div className="horarios-card">
                        <div className="horarios-title">Horarios de Atención</div>
                        <div className="horarios-dias">Lunes a Domingo</div>
                        <div className="horarios-horas">07:00 AM — 01:00 AM</div>
                    </div>
                </div>

                <div className="map-wrapper">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.6299038110287!2d-60.2170985!3d-33.3284898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7670062e5cc2d%3A0x130f6d973a0a3e4d!2sEl%20caf%C3%A9%20de%20la%20plaza%20mitre!5e0!3m2!1ses-419!2sar!4v1777404410325!5m2!1ses-419!2sar" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}