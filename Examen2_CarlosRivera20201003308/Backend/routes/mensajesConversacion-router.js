var express = require('express');
var router = express.Router();
var mensajeconversacion = require('../models/conversaciones');


// Ver mensajes de conversaciones
router.get('/:idConversacion', function(req, res) {
    mensajeconversacion.find({_id: req.params.idConversacion})
      .then(mensajeconversacion => {
        if (mensajeconversacion.length === 0) {
          res.send({ codigo: 404, mensaje: 'Conversación No Existe' });
        } else {
          const mensajes = mensajeconversacion[0].mensajes;
          res.send({ mensajes });
        }
      })
      .catch(err => {
        res.send(err);
      });
  });

// agregar nuevo mensaje de converscion para alguien
  router.post('/:idConversacion', async function(req, res) {
    try {
      const idConversacion = req.params.idConversacion;
      const nuevoMensaje = req.body.mensaje;
  
      const conversacion = await mensajeconversacion.findById(idConversacion);
  
      if (!conversacion) {
        return res.status(404).json({ mensaje: 'Conversación no encontrada' });
      }
  
      conversacion.mensajes.push(nuevoMensaje);
      await conversacion.save();
  
      res.status(201).json({ mensaje: 'Mensaje agregado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });

  router.delete('/:idConversacion/:id_mensaje', async function(req, res) {
    try {
      const idConversacion = req.params.idConversacion;
      const idMensaje = parseInt(req.params.id_mensaje);
  
      const conversacion = await mensajeconversacion.findById(idConversacion);
  
      if (!conversacion) {
        return res.status(404).json({ mensaje: 'Conversación no encontrada' });
      }
  
      // Encontrar el mensaje por su id_mensaje
      const mensajeAEliminar = conversacion.mensajes.find(mensaje => mensaje.id_mensaje === idMensaje);
  
      if (!mensajeAEliminar) {
        return res.status(400).json({ mensaje: 'Mensaje no encontrado' });
      }
  
      conversacion.mensajes = conversacion.mensajes.filter(mensaje => mensaje.id_mensaje !== idMensaje);
      await conversacion.save();
  
      res.status(200).json({ mensaje: 'Mensaje eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });
module.exports = router;
