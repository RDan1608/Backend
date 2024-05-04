var mongoose = require('mongoose');


var conversationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emisor: mongoose.SchemaTypes.Mixed,    
    receptor: mongoose.SchemaTypes.Mixed,  
    ultimoMensaje: String,
    fechaConversacion: String,
    mensajes: [mongoose.SchemaTypes.Mixed],
});

module.exports = mongoose.model('conversaciones',conversationSchema)