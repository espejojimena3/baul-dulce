const express = require('express');
const router = express.Router();
const verificarAdmin = require('../middlewares/verificarAdmin');

const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controladores/productos.controller');


router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);
router.post('/', verificarAdmin, crearProducto);
router.put('/:id', verificarAdmin, actualizarProducto);
router.delete('/:id', verificarAdmin, eliminarProducto);

module.exports = router;