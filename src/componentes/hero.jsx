import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <div className="hero-overlay">
        <video autoPlay loop muted playsInline className="hero-video">
        <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
        <h1>Café</h1>
        <h3>De la Plaza Mitre</h3>
        <a href="#carta" className='hero-button'>Ver Menú</a>
      </div>
    </section>
    
  )
}
