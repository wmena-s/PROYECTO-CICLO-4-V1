var express = require('express');
var router = express.Router();

const CrearCampeonato  = require('../modelos/Campeonato');



// crea jugador
router.post('/', async function(req, res){
  const campeonato = new CrearCampeonato({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    ubicacion: req.body.ubicacion,
    fechaI: req.body.fechaI,
    fechaF: req.body.fechaF,
    premio1: req.body.premio1,
    premio2: req.body.premio2
  });
  await campeonato.save();
  res.send(campeonato)
})

// todos los jugadores
router.get('/', async function (req, res) {
    const campeonato = await CrearCampeonato.find();
    res.send(campeonato);
  });

//buscar equipo por id
router.get('/:id', async function (req, res){
  const campeonato = await CrearCampeonato.findById(req.params.id);
  res.send(campeonato)
})

router.put('/', async function(req, res){
  await CrearCampeonato.findOneAndUpdate({
    _id: req.body._id,
  }, {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    ubicacion: req.body.ubicacion,
    fechaI: req.body.fechaI,
    fechaF: req.body.fechaF,
    premio1: req.body.premio1,
    premio2: req.body.premio2
  });
  res.send(true);
});

router.delete('/:id', async function (req, res){
  await CrearCampeonato.findOneAndDelete({_id: req.params.id});
  res.send(true);
})

module.exports = router;