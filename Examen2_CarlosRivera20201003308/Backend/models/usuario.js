var mongoose = require('mongoose');

var usuarioShcema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    contrasena: String,
    status: String,
    imagen: String,
    conversaciones: [mongoose.SchemaTypes.Mixed],
});

module.exports = mongoose.model('usuarios',usuarioShcema)