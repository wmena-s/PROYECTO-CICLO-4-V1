var express = require('express');
var router = express.Router();

const solicitudesEstados  = require('../modelos/estadosSolicitudes.jsx');



// crea jugador
router.post('/', async function(req, res){
  const solicitudes = new solicitudesEstados({
    equipo: req.body.equipo,
    campeonato: req.body.campeonato,
    estado: req.body.estado
  });
  await solicitudes.save();
  res.send(solicitudes)
})

// todos los jugadores
router.get('/', async function (req, res) {
    const solicitudes = await solicitudesEstados.find({ estado: "pendiente" }).exec();
    res.send(solicitudes);
  });

router.get('/todo/:id', async function (req, res) {
    const solicitudes = await solicitudesEstados.find({ equipo: req.params.id }).exec();
    res.send(solicitudes);
  });


  // todos los jugadores
router.get('/:todo', async function (req, res) {
  const solicitudes = await solicitudesEstados.find().exec();
  res.send(solicitudes);
});

//buscar equipo por id
router.get('/:id', async function (req, res){
  const solicitudes = await solicitudesEstados.findById(req.params.id);
  res.send(solicitudes)
})

router.put('/', async function(req, res){
  await solicitudesEstados.findOneAndUpdate({
    _id: req.body._id,
  }, {
    equipo: req.body.equipo,
    campeonato: req.body.campeonato,
    estado: req.body.estado
  });
  res.send(true);
});

router.put('/:id', async function (req, res){
  try{
    const modificar = await solicitudesEstados.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(modificar);
  }catch (error){
    res.status(400)
  }
});

router.delete('/:id', async function (req, res){
  await solicitudesEstados.findOneAndDelete({_id: req.params.id});
  res.send(true);
})

module.exports = router;