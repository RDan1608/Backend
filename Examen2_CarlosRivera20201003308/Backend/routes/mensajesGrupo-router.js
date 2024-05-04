var express = require('express');
var router = express.Router();
var mensajegrupo = require('../models/grupos');

// ver los mensajes de un grupo especifico
  router.get('/:idGrupo', function(req, res) {
    mensajegrupo.find({_id: req.params.idGrupo})
      .then(grupo => {
        if (grupo.length === 0) {
          res.send({ codigo: 404, mensaje: 'Grupo No Existe' });
        } else {
          const miembros = grupo[0].miembros;
          res.send({ miembros });
        }
      })
      .catch(err => {
        res.send(err);
      });
  });


// agreegar nuevo mensaje para grupo en especifico

router.post('/:idGrupo', async function(req, res) {
  try {
    const idGrupo = req.params.idGrupo;
    const nuevoMensaje = req.body;

    // Buscar el grupo por su ID
    const grupo = await mensajegrupo.findById(idGrupo);

    if (!grupo) {
      return res.status(404).json({ mensaje: 'Grupo no encontrado' });
    }

    grupo.mensajes.push(nuevoMensaje);

    await grupo.save();

    res.status(200).json({ mensaje: 'Nuevo mensaje agregado al grupo exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});


module.exports = router;
