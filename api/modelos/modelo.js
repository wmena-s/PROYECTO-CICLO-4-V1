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
        default: "",
    },
    nombreEquipo: {
        type: String,
        default: "",
    },
});

module.exports = CrearEquipo;


