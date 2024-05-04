var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');


//login endpoint
router.post('/', async (req, res) => {
    try {
      const { nombre, contrasena } = req.body;
  
      // Buscar el usuario por nombre y contraseña
      const usuarioEncontrado = await Usuario.findOne({ nombre, contrasena });
  
      if (!usuarioEncontrado) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
  
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });
  
  module.exports = router;
