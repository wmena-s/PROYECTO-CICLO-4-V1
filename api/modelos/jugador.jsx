const mongoose = require('../conexion_mongo');  
const jugador = mongoose.model('jugadores', {
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
        type: String,
        required: true,
    },
    edad: {
        type: String,
        required: true,
    },
    equipo: {
        type: String,
        required: true,
    },
    campeonato: {
        type: String,
        required: true,
    }
});

module.exports = jugador;


