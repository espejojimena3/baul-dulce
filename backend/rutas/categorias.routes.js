const express = require('express');
const router = express.Router();

const {
  obtenerCategorias
} = require('../controladores/categorias.controller');

// GET: consultar todas las categorías
router.get('/', obtenerCategorias);

module.exports = router;