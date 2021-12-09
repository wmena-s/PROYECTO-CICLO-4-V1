var express = require('express');
var router = express.Router();

const jugadores  = require('../modelos/jugador.jsx');


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

// todos los jugadores
router.get('/', async function (req, res) {
  const jugadorU = await jugadores.find();
  console.log(jugadorU);
  res.send(jugadorU);
});

module.exports = router;