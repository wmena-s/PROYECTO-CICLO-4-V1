var express = require('express');
var router = express.Router();

const CrearEquipo  = require('../modelos/modelo');



// crea jugador
router.post('/', async function(req, res){
  const equipo = new CrearEquipo({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    correo: req.body.correo,
    contraseña: req.body.contraseña,
    nombreEquipo: req.body.nombreEquipo
  });
  await equipo.save();
  res.send(equipo)
})

// todos los jugadores
router.get('/', async function (req, res) {
    const equipo = await CrearEquipo.find();
    console.log(equipo)
    res.send(equipo);
  });


module.exports = router;