import './App.css'
import Navbar from './componentes/navbar'
import Hero from './componentes/hero'
import Carta from './componentes/carta'
import Galeria from './componentes/Galeria'
import Ubicacion from './componentes/Ubicacion'
import Footer from "./componentes/footer"
import Whatsapp from './componentes/Whatsapp'

function App() {
  return (
    <>
     
      <header>
        <Navbar />
      </header>

      
      <main>
        <Hero />
        <Carta />
        <Galeria />
        <Ubicacion />
        <Whatsapp />
      </main>

      
      <Footer /> 
      
    </>
  )
}

export default App
