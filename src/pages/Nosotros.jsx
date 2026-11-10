
import { Link } from 'react-router-dom'

function Nosotros() {
  return (
    <section className="historia-pagina">

      <div className="historia-intro">
        <p className="etiqueta">CONOCE NUESTRA HISTORIA</p>
        <h1>Un sueño que comenzó entre hermanas</h1>

        <p>
          Hay sueños que llegan cuando menos los esperamos.
          Y a veces, los momentos más difíciles nos ayudan
          a descubrir aquello que verdaderamente nos apasiona.
        </p>
      </div>

      <div className="historia-foto">
        <img
          src="/images/hermanas.jpg"
          alt="Dina y Jimena, fundadoras de Baúl Dulce"
          style={{
            width: '100%',
            maxWidth: '450px',
            height: 'auto',
            borderRadius: '20px'
          }}
        />
        <p>Dina y Jimena, las hermanas detrás de Baúl Dulce 💗</p>
      </div>

      <div className="historia-seccion">
        <h2>Todo comenzó con una pasión</h2>

        <p>
          Baúl Dulce nació durante la pandemia, en una época
          llena de incertidumbre y cambios. Mientras el mundo
          parecía detenerse, dos hermanas encontraron en la
          pastelería una manera de seguir creando y compartiendo
          momentos especiales.
        </p>

        <p>
          Dina, la hermana mayor, trabajaba como administradora
          de aduanas, mientras que Jimena estudiaba Ingeniería
          Industrial. Aunque sus caminos profesionales eran
          diferentes, ambas compartían algo muy especial:
          el amor por la repostería.
        </p>

        <p>
          Lo que antes era un pasatiempo se convirtió en una
          oportunidad para comenzar algo nuevo. Entre recetas,
          pruebas, ilusión y muchas ganas de aprender,
          decidieron transformar su pasión en un emprendimiento.
        </p>
      </div>

      <div className="historia-seccion">
        <h2>De nuestra cocina a muchos hogares</h2>

        <p>
          Los primeros pedidos llegaron de familiares y vecinos
          que confiaron en ellas. Cada tarta y cada caja de dulces
          representaban una pequeña alegría y una motivación
          para seguir adelante.
        </p>

        <p>
          Poco después, las hermanas decidieron crear una página
          de Facebook para compartir sus preparaciones.
          Gracias a las recomendaciones de sus primeros clientes,
          Baúl Dulce comenzó a llegar a más personas.
        </p>

        <p>
          Con cada nuevo encargo también llegaban nuevos retos,
          aprendizajes y oportunidades. Lo que comenzó como
          una pequeña aventura familiar empezó a convertirse
          en un verdadero proyecto de vida.
        </p>
      </div>

      <div className="historia-seccion">
        <h2>Dos hermanas, un mismo sueño</h2>

        <p>
          Con el deseo de seguir mejorando, Jimena decidió
          especializarse en pastelería en Le Cordon Bleu,
          donde pudo perfeccionar sus técnicas y ampliar
          sus conocimientos.
        </p>

        <p>
          Por su parte, Dina continuó formándose mediante
          cursos de pastelería y aportó su experiencia
          profesional a la administración y organización
          del emprendimiento.
        </p>

        <p>
          Juntas encontraron la manera de complementar
          sus talentos, combinando creatividad, dedicación
          y organización para hacer crecer Baúl Dulce.
        </p>
      </div>

      <div className="historia-seccion">
        <h2>Mucho más que una pastelería</h2>

        <p>
          Hoy, Baúl Dulce representa mucho más que la
          elaboración de postres. Es una historia de esfuerzo,
          aprendizaje, perseverancia y amor entre hermanas.
        </p>

        <p>
          Cada tarta, cupcake, brownie o caja de dulces lleva
          una pequeña parte de aquel sueño que comenzó en casa.
          Para Dina y Jimena, lo más especial es saber que sus
          creaciones pueden acompañar cumpleaños, celebraciones
          y recuerdos inolvidables.
        </p>

        <p>
          Porque un dulce puede parecer algo sencillo,
          pero tiene el poder de reunir personas,
          despertar sonrisas y hacer que un momento
          cotidiano se convierta en algo extraordinario.
        </p>
      </div>

      <div className="historia-final">
        <h2>Hecho con amor, de nuestra familia a la tuya</h2>

        <p>
          Baúl Dulce no nació solamente de una receta.
          Nació de dos hermanas, de un sueño compartido
          y de la ilusión de crear algo especial.
        </p>

        <p>
          Gracias por formar parte de nuestra historia.
          Cada dulce que compartimos lleva un pedacito de ella. 💗
        </p>

        <Link to="/" className="boton">
          Volver al inicio
        </Link>
      </div>

    </section>
  )
}

export default Nosotros
