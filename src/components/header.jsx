
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="encabezado">
      <Link className="logo" to="/">
        Baúl Dulce
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/tematicos">Temticos</Link>
      </nav>
    </header>
  )
}

export default Header
