const verificarAdmin = (req, res, next) => {
  const claveCorrecta = process.env.ADMIN_API_KEY;
  const claveRecibida = req.headers['x-api-key'];

  if (!claveCorrecta) {
    return res.status(503).json({
      error: 'La seguridad del administrador no está configurada'
    });
  }

  if (!claveRecibida || claveRecibida !== claveCorrecta) {
    return res.status(401).json({
      error: 'No tienes autorización para realizar esta acción'
    });
  }

  next();
};

module.exports = verificarAdmin;