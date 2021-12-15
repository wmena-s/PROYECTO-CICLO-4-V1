const mongoose = require('../conexion_mongo');  
const crearEquipo = mongoose.model('Equipos', {
    nombre: {
        type: String,
        default: "",
    },
    usuario: {
        type: String,
        default: "",
    },
    correo: {
        type: String,
        default: "",
    },
    campeonato: [{
        type: mongoose.Types.ObjectId,
        ref: 'crearCampeonato',
        default: [],
    }],
    nombreEquipo: {
        type: String,
        default: "",
    },
});

module.exports = crearEquipo;


