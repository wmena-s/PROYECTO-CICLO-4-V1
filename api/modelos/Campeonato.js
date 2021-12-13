const mongoose = require('../conexion_mongo');  
const crearCampeonato = mongoose.model('Campeonatos', {
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        default: "",
    },
    ubicacion: {
        type: String,
        default: "",
    },
    fechaI: {
        type: String,
        default: "",
    },
    fechaF: {
        type: String,
        default: "",
    },
    premio1: {
        type: String,
        default: "",
    },
    premio2: {
        type: String,
        default: "",
    },
    estado: {
        type: String,
        default: "",
    },
});

module.exports = crearCampeonato;
