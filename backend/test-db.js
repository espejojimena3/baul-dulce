
const db = require('./db');

async function probarConexion() {
  try {
    const [resultado] = await db.query('SELECT VERSION() AS version');

    console.log('¡Conexión correcta con Baúl Dulce!');
    console.log('Versión de MariaDB:', resultado[0].version);
  } catch (error) {
    console.error('Error de conexión:', error.message);
  } finally {
    await db.end();
  }
}

probarConexion();