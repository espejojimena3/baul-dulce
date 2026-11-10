
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Tematicos from './pages/Tematicos.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* PÁGINA DE INICIO */}
          <Route
            path="/"
            element={
              <>
                <section className="hero" id="inicio">
                  <div className="hero-texto">
                    <p className="etiqueta">HECHO CON AMOR</p>

                    <h1>Un poquito de dulzura para tu día</h1>

                    <p>
                      Tartas, cupcakes y pequeños caprichos
                      preparados con cariño.
                    </p>

                    <Link className="boton" to="/productos">
                      Descubre nuestros dulces
                    </Link>
                  </div>

                  <div className="hero-decoracion">
                    <img
                      src="/images/baul-dulce.jpg"
                      alt="Tarta"
                    />
                  </div>
                </section>

             

                <section className="contacto" id="contacto">
                  <h2>¿Preparamos algo especial?</h2>
                  <p>Nos encantará conocer tu idea.</p>

                  <Link to="/contacto" className="boton">
                    Contactar
                  </Link>
                </section>
              </>
            }
          />

          <Route path="/productos" element={<Home />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/tematicos" element={<Tematicos />} />
          
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
