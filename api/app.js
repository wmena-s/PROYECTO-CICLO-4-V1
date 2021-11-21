var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jugadorRouter = require('./routes/equipo');
var usuarioInterno = require('./routes/usuariosInternos'); // se conecta con la ruta de usuario interno y esta a su vez con el modelo registro usuario interno

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/registros', jugadorRouter)
app.use('/usuarioInterno', usuarioInterno )
app.use('/', indexRouter);


module.exports = app;
