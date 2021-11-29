const mongoose = require('../conexion_mongo');  
const usuarioExterno = mongoose.model('usuarioExterno', {
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

module.exports = usuarioExterno;


