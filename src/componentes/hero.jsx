import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
        preload="auto"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <img src="/logo.png" alt="Logo" className="hero-logo" />
        <a href="#carta" className="hero-button">Ver Menú</a>
      </div>
    </section>
  )
}


