const mongoose = require('../conexion_mongo');  
const usuarioInterno = mongoose.model('usuarioInterno', {
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
});

module.exports = usuarioInterno;


