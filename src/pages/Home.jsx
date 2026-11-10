
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

function Home() {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch('http://localhost:3000/productos')

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }

        const datos = await respuesta.json()
        setProductos(datos)
      } catch (error) {
        console.error(error)
        setError('No hemos podido cargar los dulces. Inténtalo más tarde.')
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="productos" id="productos">
      <p className="etiqueta">NUESTRAS DELICIAS</p>
      <h2>Un mundo de dulces</h2>

      <input
        className="buscador"
        type="search"
        placeholder="Busca tu dulce favorito..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
        aria-label="Buscar productos por nombre"
      />

      {cargando ? (
        <p>Cargando nuestros dulces...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : productosFiltrados.length > 0 ? (
        <div className="tarjetas">
          {productosFiltrados.map((producto) => (
            <ProductCard
            key={producto.id}
            producto={producto}
            alVerDetalle={setProductoSeleccionado}
            />
          ))}
        </div>
      ) : (
        <p>
          {busqueda
            ? 'No encontramos dulces con ese nombre.'
            : 'Todavía no hay dulces disponibles.'}
        </p>
      )}
        <ProductModal
        producto={productoSeleccionado}
        alCerrar={() => setProductoSeleccionado(null)}
        />
    </section>
  )
}

export default Home
