const mongoose = require('../conexion_mongo');
const jugador = mongoose.model('jugadores', {
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
        min: [3, 'Too few eggs'],
        unique: true,
        max: 8,
    },
    edad: {
        type: String,
        required: true,
    },
    equipo: [{
        type: mongoose.Types.ObjectId,
        ref: 'CrearEquipo',
        required: false
    }],
    campeonato: {
        type: String,
        default: "",
    }
});

module.exports = jugador;


