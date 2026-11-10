
function Detalle({ producto, alVolver }) {
  if (!producto) {
    return (
      <section className="detalle">
        <h2>Producto no encontrado</h2>
        <button className="boton" onClick={alVolver}>
          Volver al catálogo
        </button>
      </section>
    )
  }

  return (
    <section className="detalle">
      <img className="detalle-imagen" src={producto.imagen} alt={producto.nombre}/>

      <p className="etiqueta">UN DULCE ESPECIAL</p>

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p className="detalle-precio">
        {producto.precio.toFixed(2)} €
      </p>

      <button className="boton" onClick={alVolver}>
        Volver al catálogo
      </button>
    </section>
  )
}

export default Detalle