var express = require('express');
var router = express.Router();
var conversacion = require('../models/conversaciones');


//ver conversaciones
router.get('/', function(req, res) {
    conversacion .find().then(result=>{
      res.send(result);
      res.end();
    }).catch(err=>{
      res.send(err);
      res.end();
    });
    
})

//ver conversacion por id
router.get('/:id', function(req, res) {

    conversacion.find({_id: req.params.id})
      .then(user => {
        if (!user) {
          res.send({ codigo: 404, mensaje: 'Registro No Existe' });
        } else {
          res.send(user[0]);
        }
      })
      .catch(err => {
        res.send(err);
      });
  });


  //eliminar conversaciones
  router.delete('/:id', function(req, res){
    conversacion.findByIdAndRemove(req.params.id)
      .then(result => {
        if (!result) {
          res.send({ codigo: 404, mensaje: 'Conversación No Encontrada' });
        } else {
          res.send({ codigo: 200, mensaje: 'Conversacion Eliminada con Exito' });
        }
      })
      .catch(err => {
        res.send(err);
      });
  });
module.exports = router;