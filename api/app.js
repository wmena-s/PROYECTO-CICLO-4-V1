var express = require('express');
var path = require('path');
var logger = require('morgan');

var jugadorRouter = require('./routes/equipo');
var usuarioInterno = require('./routes/usuariosInternos');// se conecta con la ruta de usuario interno y esta a su vez con el modelo registro usuario interno
var usuarioExterno = require('./routes/usuariosExterno');// se conecta con la ruta de usuario interno y esta a su vez con el modelo registro usuario interno
var jugadores = require('./routes/jugadores');
var campeonatos  = require('./routes/campeonatos');
var estadoSolicitud  = require('./routes/estadosSolicitudes.jsx');

var app = express();

// inicio: permite hacer llamados de react desde otro direccion (5000) a la 3000 de la api
app.use((req, res, next)=>{
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
});
//comentario: fin.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/registros', jugadorRouter)
app.use('/estadosSolicitud', estadoSolicitud)
app.use('/usuarioInterno', usuarioInterno )
app.use('/usuarioExterno', usuarioExterno )
app.use('/jugadores', jugadores )
app.use('/campeonato', campeonatos )


module.exports = app;
