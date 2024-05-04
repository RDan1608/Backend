var express = require('express');
var router = express.Router();
var llamada = require('../models/llamadas');


//lista de llamadas
router.get('/', function(req, res) {
    llamada.find().then(result=>{
      res.send(result);
      res.end();
    }).catch(err=>{
      res.send(err);
      res.end();
    });
    
})

//llamadas en especifico
router.get('/:id', function(req, res) {

    llamada.find({_id: req.params.id})
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

module.exports = router;