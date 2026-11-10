const express = require('express');
const router = express.Router();

const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controladores/productos.controller');

// GET: listar productos
router.get('/', obtenerProductos);

// GET: buscar un producto
router.get('/:id', obtenerProductoPorId);

// POST: crear un producto
router.post('/', crearProducto);

// PUT: actualizar un producto
router.put('/:id', actualizarProducto);

// DELETE: eliminar un producto
router.delete('/:id', eliminarProducto);

module.exports = router;