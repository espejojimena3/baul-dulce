
import ContactoForm from '../components/ContactoForm'

function Contacto() {
  return (
    <section className="contacto-pagina">
      <p className="etiqueta">HABLEMOS DE DULCES</p>

      <h1>¿Preparamos algo especial?</h1>

      <p>
        ¿Tienes alguna pregunta o quieres encargar un dulce?
        Escríbenos y cuéntanos tu idea. 
      </p>

      <ContactoForm />

      <a href="/" className="boton">
        Volver al inicio
      </a>
    </section>
  )
}

export default Contacto
