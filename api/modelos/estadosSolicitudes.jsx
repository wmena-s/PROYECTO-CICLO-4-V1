const mongoose = require('../conexion_mongo');  
const estadosSolicitud = mongoose.model('solicitudes', {
    equipo: {
        type: String,
        default: "",
    },
    campeonato: {
        type: String,
        default: "",
    },
    estado: {
        type: String,
        default: "",
    }
});

module.exports = estadosSolicitud;