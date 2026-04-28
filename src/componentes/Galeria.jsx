import './galeria.css'

export default function Galeria() {
  const imagenes = [
    { id: 1, src: '/galeria1.jpg', alt: 'Café de la Plaza', clase: 'large' },
    { id: 2, src: '/galeria2.jpg', alt: 'Nuestros Platos', clase: 'tall' },
    { id: 3, src: '/galeria3.jpg', alt: 'Momentos Especiales', clase: 'wide' },
    { id: 4, src: '/galeria4.jpg', alt: 'Gastronomía Local', clase: 'small' },
    { id: 5, src: '/galeria5.jpg', alt: 'Detalles que Enamoran', clase: 'small' },
    { id: 6, src: '/galeria6.jpg', alt: 'El Clásico de San Nicolás', clase: 'medium' },
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
