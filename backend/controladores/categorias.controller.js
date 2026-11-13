const db = require('../data/db');

// Obtener todas las categorías
const obtenerCategorias = async (req, res) => {
  try {
    const [categorias] = await db.query(
      'SELECT * FROM categorias'
    );

    res.json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);

    res.status(500).json({
      error: 'Error al obtener las categorías'
    });
  }
};

module.exports = {
  obtenerCategorias
};