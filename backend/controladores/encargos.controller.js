const db = require('../data/db');

// Obtener todos los encargos
const obtenerEncargos = async (req, res) => {
  try {
    const [encargos] = await db.query(`
      SELECT
        e.id,
        p.nombre AS producto,
        e.cantidad,
        e.estado
      FROM encargos AS e
      INNER JOIN productos AS p
        ON e.producto_id = p.id
      ORDER BY e.id DESC
    `);

    res.json(encargos);
  } catch (error) {
    console.error('Error al obtener encargos:', error);

    res.status(500).json({
      error: 'Error al obtener los encargos'
    });
  }
};

module.exports = {
  obtenerEncargos
};