const mongoose = require('../conexion_mongo');  
const CrearEquipo = mongoose.model('Videojuego', {
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
    contraseña: {
        type: String,
        required: true,
    },
    nombreEquipo: {
        type: String,
        required: true,
    },
});

module.exports = CrearEquipo;


