const mongoose = require('../conexion_mongo');  
const crearEquipo = mongoose.model('Equipos', {
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
    campeonato: [{
        type: mongoose.Types.ObjectId,
        ref: 'crearCampeonato',
        required: false
    }],
    nombreEquipo: {
        type: String,
        default: "",
    },
});

module.exports = crearEquipo;


