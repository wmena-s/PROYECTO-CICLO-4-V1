var express = require('express');
var path = require('path');
var logger = require('morgan');

//configura libreria de autenticacion
const passport =require('passport')
const cookieParser = require('cookie-parser')
const PassporLocal =require('passport-local').Strategy
const session = require('express-session')
app.use(express.urlencoded({extended: true}));
app.use(cookieParser('clave secreta'))
app.use(session({
    secret: 'clave secreta',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//se instala passport-local, aunque se puede ingresar por redes sociales
passport.use(new PassporLocal(function (username, password, done){
    if(username === "wilder" && password === "12345678") {
        //name: "quienIngreso",}
        return done(null, {id: 1, name: "wilder"});
    }
    done(null, false);
}));

//serializacion y desealizacion
passport.serializeUser(function (user,done){
    done(null, user.id);
})
//desealizacion
passport.deserializeUser(function (id, done){
    done(null, {id: 1, name: "wilder"});
})
//login
app.post("/login", passport.authenticate('local',{
    successRedirect: "/",
    failureRedirect: "/login"
}))





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jugadorRouter = require('./routes/equipo');
var usuarioInterno = require('./routes/usuariosInternos');// se conecta con la ruta de usuario interno y esta a su vez con el modelo registro usuario interno
var usuarioExterno = require('./routes/usuariosExterno');// se conecta con la ruta de usuario interno y esta a su vez con el modelo registro usuario interno
var jugadores = require('./routes/jugadores');

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
app.use('/usuarioExterno', usuarioExterno )
app.use('/jugadores', jugadores )
app.use('/', indexRouter);


module.exports = app;
