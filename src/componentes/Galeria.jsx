import './galeria.css'

export default function Galeria() {
  const imagenes = [
    { id: 1, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/434685799_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'Nuestros Ñoquis Caseros', clase: 'large' },
    { id: 2, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/434521456_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'El Café Perfecto', clase: 'tall' },
    { id: 3, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/432145678_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'Vista a la Plaza', clase: 'wide' },
    { id: 4, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/431234567_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'Nuestra Pastelería', clase: 'small' },
    { id: 5, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/430123456_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'Momentos Especiales', clase: 'small' },
    { id: 6, src: 'https://scontent.cdninstagram.com/v/t51.29350-15/429123456_18428389703058863_4281728203585093796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de2d&_nc_ohc=Wk_WfPz3_XQAX8A_WfP&_nc_ht=scontent.cdninstagram.com&oh=00_AfC_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z_f_Z&oe=65EF_Z_f', alt: 'Cenas Inolvidables', clase: 'medium' },
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
