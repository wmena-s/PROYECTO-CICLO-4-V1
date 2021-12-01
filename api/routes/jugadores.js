var express = require('express');
var router = express.Router();

const jugadores  = require('../modelos/jugador');


router.post('/', async function(req, res){
    const jugador = new jugadores({
      nombre: req.body.nombre,
      cedula: req.body.cedula,
      edad: req.body.edad,
      campeonato: req.body.campeonato,
      equipo: req.body.equipo
    });
    await jugador.save();
    res.send(jugador)
  })

module.exports = router;