const mongoose = require('../conexion_mongo');  
const CrearEquipo = mongoose.model('Videojuego', {
    nombre: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
        min: 0,
    },
    correo: {
        type: String,
        required: true,
        min: 0,
    },
    contraseña: {
        type: String,
        required: true,
        min: 8,
    },
    nombreEquipo: {
        type: String,
        required: true,
        min: 0,
    },
});

module.exports = CrearEquipo;


