var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');


//ver usuarios
router.get('/', function(req, res) {
    usuario.find().then(result=>{
      res.send(result);
      res.end();
    }).catch(err=>{
      res.send(err);
      res.end();
    });
    
})

//ver Usuario por id
router.get('/:id', function(req, res) {

    usuario.find({_id: req.params.id})
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