var express = require('express');
var router = express.Router();

const jugador  = require('../modelos/modelo');

router.get('/', async function (req, res) {
    console.log(jugador)
    const jugadores = await jugador.find();
    res.send(jugadores);
  });


module.exports = router;