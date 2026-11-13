
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const productosRoutes = require('./rutas/productos.routes');
const categoriasRoutes = require('./rutas/categorias.routes');
const encargosRoutes = require('./rutas/encargos.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: '¡La API de Baúl Dulce funciona correctamente!'
  });
});

// Rutas de productos
app.use('/productos', productosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/encargos', encargosRoutes);

// Error 404
app.use((req, res) => {
  res.status(404).json({
    error: 'La ruta solicitada no existe'
  });
});

app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});