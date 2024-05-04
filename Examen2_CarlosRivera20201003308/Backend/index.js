var express = require('express');
var bodyParser = require('body-parser');
var cors  = require('cors');

var database = require('./modules/database');
var usuarioRouter = require('./routes/usuarios-router');
var conversacionRouter = require('./routes/conversaciones-router');
var loginRouter = require('./routes/login-router');
var mensajesRouter = require('./routes/mensajesConversacion-router');
var gruposRouter = require('./routes/grupos-router');
var mensajesGrupos= require('./routes/mensajesGrupo-router');
var llamadasRouter = require('./routes/llamadas-router');
port = 3000
var app = express();


//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/usuarios',usuarioRouter)
app.use('/conversaciones',conversacionRouter)
app.use('/login',loginRouter)
app.use('/mensajesConversacion',mensajesRouter)
app.use('/grupos',gruposRouter)
app.use('/mensajesGrupos',mensajesGrupos)
app.use('/llamadas',llamadasRouter)

app.get('/', function(req, res) {
    res.send('Sevidor en linea')
})

app.listen(port, function(){
    console.log('listening on port ' + port)
})