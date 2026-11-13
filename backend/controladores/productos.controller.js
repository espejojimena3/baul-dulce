
const db = require('../data/db');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const [productos] = await db.query('SELECT * FROM productos');
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const [productos] = await db.query(
      'SELECT * FROM productos WHERE id = ?',
      [req.params.id]
    );

    if (productos.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(productos[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el producto' });
  }
};

// Crear un producto
const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen, categoria, stock } = req.body;

   if (
  typeof nombre !== 'string' ||
  nombre.trim() === '' ||
  precio == null ||
  precio === '' ||
  !Number.isFinite(Number(precio)) ||
  Number(precio) < 0 ||
  stock == null ||
  stock === '' ||
  !Number.isInteger(Number(stock)) ||
  Number(stock) < 0
) {
  return res.status(400).json({
    error: 'Introduce un nombre, precio y stock válidos'
  });
}

    const [resultado] = await db.query(
      `INSERT INTO productos
      (nombre, descripcion, precio, imagen, categoria, stock)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, descripcion, precio, imagen, categoria, stock]
    );

    res.status(201).json({
      mensaje: 'Producto creado correctamente',
      id: resultado.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto
const actualizarProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen, categoria, stock } = req.body;

    if (
      typeof nombre !== 'string' ||
      nombre.trim() === '' ||
      precio == null ||
      precio === '' ||
      !Number.isFinite(Number(precio)) ||
      Number(precio) < 0 ||
      stock == null ||
      stock === '' ||
      !Number.isInteger(Number(stock)) ||
      Number(stock) < 0
    ) {
      return res.status(400).json({
        error: 'Introduce un nombre, precio y stock válidos'
      });
    }

    const [resultado] = await db.query(
      `UPDATE productos
       SET nombre = ?, descripcion = ?, precio = ?,
           imagen = ?, categoria = ?, stock = ?
       WHERE id = ?`,
      [nombre, descripcion, precio, imagen, categoria, stock, req.params.id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const [resultado] = await db.query(
      'DELETE FROM productos WHERE id = ?',
      [req.params.id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};