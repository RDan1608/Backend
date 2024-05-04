var mongoose = require('mongoose');

var grupoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombreGrupo: String,
  miembros: [mongoose.Schema.Types.Mixed],
  mensajes: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model('Grupo', grupoSchema)
