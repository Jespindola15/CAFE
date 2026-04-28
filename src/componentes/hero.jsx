import './hero.css'
import heroVideo from '/hero-video.mp4?url' // Usamos ?url para que Vite nos dé la ruta correcta

export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video" key="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <img src="/logo.png" alt="Café de la Plaza Logo" className="hero-logo" />
        <a href="#carta" className='hero-button'>Ver Menú</a>
      </div>
    </section>
  )
}

