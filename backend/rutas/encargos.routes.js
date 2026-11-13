const express = require('express');
const router = express.Router();
const verificarAdmin = require('../middlewares/verificarAdmin');

const {
  obtenerEncargos
} = require('../controladores/encargos.controller');

router.get('/', verificarAdmin, obtenerEncargos);

module.exports = router;