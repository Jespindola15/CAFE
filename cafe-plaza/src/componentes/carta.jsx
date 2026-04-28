import './carta.css'

export default function Carta() {
  const menus = [
    {
      id: 1,
      titulo: 'Menú Principal',
      descripcion: 'Nuestra selección completa de platos, entradas y postres.',
      archivo: '/menu-principal.pdf',
      icono: '🍽️'
    },
    {
      id: 2,
      titulo: 'Cafetería',
      descripcion: 'Variedad de cafés, pastelería artesanal y opciones para el té.',
      archivo: '/menu-cafeteria.pdf',
      icono: '☕'
    },
    {
      id: 3,
      titulo: 'Menú Ejecutivo',
      descripcion: 'Opciones frescas y rápidas para tus mediodías de lunes a viernes.',
      archivo: '/menu-ejecutivo.pdf',
      icono: '💼'
    }
  ]

  return (
    <section className="carta-section" id="carta">
      <div className="carta-container">
        <h2 className="carta-titulo">Nuestra Carta</h2>
        <div className="carta-grid">
          {menus.map((menu) => (
            <div key={menu.id} className="carta-card">
              <div className="card-icon">{menu.icono}</div>
              <h3>{menu.titulo}</h3>
              <p>{menu.descripcion}</p>
              <a href={menu.archivo} target="_blank" rel="noopener noreferrer" className="card-button">
                Ver Menú
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
