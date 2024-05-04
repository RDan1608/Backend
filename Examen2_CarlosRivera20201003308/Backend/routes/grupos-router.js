var express = require('express');
var router = express.Router();
var grupos = require('../models/grupos');

// Obtener miembros de un grupo por ID
router.get('/:idGrupo', function(req, res) {
  grupos.findById(req.params.idGrupo)
    .then(grupos => {
      if (!grupos) {
        res.status(404).json({ mensaje: 'Grupo no encontrado' });
      } else {
        const miembros = grupos.miembros;
        res.status(200).json({ miembros });
      }
    })
    .catch(err => {
      res.status(500).json({ mensaje: 'Error en el servidor' });
    });
});

//agregar nuevo miembro a un grupo por id de grupo
router.post('/:idGrupo', async function(req, res) {
    try {
      var idGrupo = req.params.idGrupo;
      var nuevoMiembro = req.body;
  
      const grupoEncontrado = await grupos.findById(idGrupo);
  
      if (!grupoEncontrado) {
        return res.status(404).json({ mensaje: 'Grupo no encontrado' });
      }

      grupoEncontrado.miembros.push(nuevoMiembro);
  
      await grupoEncontrado.save();
  
      res.status(200).json({ mensaje: 'Miembro agregado al grupo exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });



module.exports = router;
