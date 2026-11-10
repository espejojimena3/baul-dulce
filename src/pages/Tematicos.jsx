
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Tematicos() {
  const [fotoActual, setFotoActual] = useState(1)
  const totalFotos = 7

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActual((anterior) =>
        anterior === totalFotos ? 1 : anterior + 1
      )
    }, 4000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="tematicos-pagina">

      <div className="tematicos-intro">
        <p className="etiqueta">CREACIONES ESPECIALES</p>

        <h1>Tartas temáticas y personalizadas</h1>

        <p>
          En Baúl Dulce creemos que cada celebración merece
          algo especial. Por eso, creamos tartas personalizadas,
          cuidando cada detalle para hacer realidad tus ideas.
        </p>
      </div>

      <div className="tematicos-galeria">
        <img
          src={`/images/tematica${fotoActual}.jpg`}
          alt={`Tarta personalizada de Baúl Dulce ${fotoActual}`}
          className="tematicos-imagen"
        />

        <p className="tematicos-contador">
          {fotoActual} de {totalFotos}
        </p>
      </div>

      <div className="tematicos-info">
        <h2>Tu idea, nuestra inspiración 💗</h2>

        <p>
          Cumpleaños, aniversarios y momentos especiales.
          Nos encanta preparar tartas con diseños únicos,
          adaptados a cada celebración.
        </p>

        <p>
          Puedes contarnos qué temática te gustaría,
          los colores que imaginas y para cuántas personas
          necesitas la tarta.
        </p>

        <Link to="/contacto" className="boton">
          Solicitar mi tarta
        </Link>
      </div>

    </section>
  )
}

export default Tematicos
