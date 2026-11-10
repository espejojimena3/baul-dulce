
import { useState } from 'react'

function ContactoForm() {
  const [enviando, setEnviando] = useState(false)
  const [aviso, setAviso] = useState('')

  async function enviarFormulario(evento) {
    evento.preventDefault()

    const formulario = evento.currentTarget
    const datos = new FormData(formulario)

    const nombre = datos.get('nombre').trim()
    const email = datos.get('email').trim()
    const mensaje = datos.get('mensaje').trim()

    if (!nombre || !email || !mensaje) {
      setAviso('Por favor, completa todos los campos.')
      return
    }

    setEnviando(true)
    setAviso('')

    try {
      const respuesta = await fetch('https://formspree.io/f/xrpqzbnp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
        })

      if (!respuesta.ok) {
        throw new Error('No se pudo enviar el mensaje')
      }

      setAviso('¡Mensaje enviado correctamente!')
      formulario.reset()
    } catch (error) {
      setAviso('No se pudo enviar el mensaje. Inténtalo más tarde.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form className="formulario-contacto" onSubmit={enviarFormulario}>
      <label htmlFor="nombre">Tu nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Escribe tu nombre"
        maxLength={100}
        required
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="tucorreo@ejemplo.com"
        maxLength={150}
        required
      />

      <label htmlFor="mensaje">Tu mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        placeholder="Cuéntanos qué dulce te gustaría encargar..."
        rows={5}
        maxLength={1000}
        required
      />

      <button className="boton" type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {aviso && <p role="status">{aviso}</p>}
    </form>
  )
}

export default ContactoForm
