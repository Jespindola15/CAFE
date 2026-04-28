import './galeria.css'

export default function Galeria() {
  const imagenes = [
    { id: 1, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop', alt: 'Café de especialidad', clase: 'large' },
    { id: 2, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop', alt: 'Interior del café', clase: 'tall' },
    { id: 3, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop', alt: 'Ambiente acogedor', clase: 'wide' },
    { id: 4, src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1000&auto=format&fit=crop', alt: 'Pastelería artesanal', clase: 'small' },
    { id: 5, src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop', alt: 'Detalle de café', clase: 'small' },
    { id: 6, src: 'https://images.unsplash.com/photo-1559925393-8be0ec41b500?q=80&w=1000&auto=format&fit=crop', alt: 'Nuestras mesas', clase: 'medium' },
  ];

  return (
    <section className="galeria-section" id="galeria">
      <div className="galeria-header">
        <p className="galeria-subtitle">Momentos</p>
        <h2 className="galeria-title">Nuestra Galería</h2>
      </div>

      <div className="galeria-grid">
        {imagenes.map((img) => (
          <div key={img.id} className={`galeria-item ${img.clase}`}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="galeria-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="galeria-footer">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="insta-button">
          <i className="fi fi-brands-instagram"></i> Ver más en Instagram
        </a>
      </div>
    </section>
  )
}
