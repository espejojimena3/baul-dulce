
function ProductModal({ producto, alCerrar }) {
  if (!producto) return null

  return (
    <div
      className="modal-fondo"
      onClick={alCerrar}
    >
      <div
        className="modal-contenido"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalles de ${producto.nombre}`}
        onClick={(evento) => evento.stopPropagation()}
      >
        <button
          className="modal-cerrar"
          onClick={alCerrar}
          aria-label="Cerrar ventana"
        >
          ×
        </button>

        <img
          src={`/images/${producto.imagen}`}
          alt={producto.nombre}
          className="modal-imagen"
        />

        <h2>{producto.nombre}</h2>

        <p>{producto.descripcion}</p>

        <p className="modal-precio">
          {Number(producto.precio).toFixed(2)} €
        </p>
        <div className="modal-detalles">
        <h3>Ingredientes</h3>
        <p>{producto.ingredientes || 'Información no disponible'}</p>

        <h3>Alérgenos</h3>
        <p>{producto.alergenos || 'Información no disponible'}</p>

        <h3>Porciones</h3>
        <p>{producto.porciones || 'Información no disponible'}</p>

        <h3>Conservación</h3>
        <p>{producto.conservacion || 'Información no disponible'}</p>

        <h3>Disponibilidad</h3>
        <p>
            {producto.stock > 0
            ? `Disponible (${producto.stock} unidades)`
            : 'Agotado'}
        </p>
        </div>

        <button className="boton" onClick={alCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ProductModal
