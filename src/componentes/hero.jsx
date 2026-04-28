import './hero.css'

export default function Hero() {
  console.log("Hero renderizado"); // Esto nos dirá si el componente carga
  return (
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="seo-title">Café de la Plaza Mitre - San Nicolás</h1>
        <img src="/logo.png" alt="Logo Café de la Plaza Mitre" className="hero-logo" />
        <a href="#carta" className="hero-button">Ver Menú</a>
      </div>
    </section>
  )
}
