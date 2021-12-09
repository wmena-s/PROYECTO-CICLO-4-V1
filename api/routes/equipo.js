var express = require('express');
var router = express.Router();

const CrearEquipo  = require('../modelos/Equipos');



// crea jugador
router.post('/', async function(req, res){
  const equipo = new CrearEquipo({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    correo: req.body.correo,
    campeonato: req.body.campeonato,
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

//buscar equipo por id
router.get('/:id', async function (req, res){
  const equipo = await CrearEquipo.findById(req.params.id);
  res.send(equipo)
})

router.put('/', async function(req, res){
  await CrearEquipo.findOneAndUpdate({
    _id: req.body._id,
  }, {
    nombre: req.body.nombre,
    usuaro: req.body.usuario,
    correo: req.body.correo,
    campeonato: req.body.campeonato,
    nombreEquipo: req.body.nombreEquipo
  });
  res.send(true);
});

router.delete('/:id', async function (req, res){
  await CrearEquipo.findOneAndDelete({_id: req.params.id});
  res.send(true);
})

module.exports = router;