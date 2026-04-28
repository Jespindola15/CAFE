import './App.css'
import Navbar from './componentes/navbar'
import Hero from './componentes/hero'
import Carta from './componentes/carta'
import Ubicacion from './componentes/Ubicacion'

function App() {
  return (
    <>
     
      <header>
        <Navbar />
      </header>

      
      <main>
        <Hero />
        <Carta />
        <Ubicacion />
      </main>

      
      <footer>
        <p>© 2025 Café de la Plaza · Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
