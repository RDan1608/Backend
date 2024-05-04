var mongoose = require('mongoose');

var llamadasShcema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emisor:[mongoose.Schema.Types.Mixed], 
    receptor: [mongoose.Schema.Types.Mixed],
    status: String,
    tiempo: String,
});

module.exports = mongoose.model('llamadas',llamadasShcema)