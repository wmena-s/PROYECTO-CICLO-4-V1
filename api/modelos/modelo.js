const mongoose = require('../conexion_mongo');  
const CrearEquipo = mongoose.model('Equipos', {
    nombre: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    campeonato: {
        type: String,
        required: true,
    },
    nombreEquipo: {
        type: String,
        required: true,
    },
});

module.exports = CrearEquipo;


