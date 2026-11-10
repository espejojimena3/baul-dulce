
function ProductCard({ producto, alVerDetalle }) {
  return (
    <article className="tarjeta">
      <div className="producto-imagen" aria-hidden="true">
       <img src={`/images/${producto.imagen}`} alt={producto.nombre} className="producto-imagen"
       />
      </div>

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <span>{Number(producto.precio).toFixed(2)} €</span>

      <button
        className="boton"
        onClick={() => alVerDetalle(producto)}
      >
        Ver detalles
      </button>
    </article>
  )
}

export default ProductCard