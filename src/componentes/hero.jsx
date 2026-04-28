import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video" key="hero-video">
        <source src="./hero-video.mp4" type="video/mp4" />
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
