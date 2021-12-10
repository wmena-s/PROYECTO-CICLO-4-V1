const mongoose = require('../conexion_mongo');
const jugador = mongoose.model('jugadores', {
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
        unique: true,
    },
    edad: {
        type: String,
        required: true,
    },
    equipo: 
    // [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'CrearEquipo',
    //     required: false
    // }]
    {
        type: String,
        default: "",
    },
    campeonato: {
        type: String,
        default: "",
    }
});

module.exports = jugador;


