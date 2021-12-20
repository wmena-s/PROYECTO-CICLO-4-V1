const mongoose = require('../conexion_mongo');
const jugador = mongoose.model('jugadores', {
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
    },
    edad: {
        type: String,
        required: true,
    },
    equipo: 
    [{
         type: mongoose.Types.ObjectId,
         ref: 'crearEquipo',
         required: false
     }],
    //{
      //  type: String,
       // default: "",
    //},
    campeonato: {
        type: String,
        default: "",
    }
});

module.exports = jugador;


