var express = require('express');
var router = express.Router();

const UsuarioInterno  = require('../modelos/registroUsuarioInterno');



// crea jugador
router.post('/', async function(req, res){
  const equipo = new UsuarioInterno({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    correo: req.body.correo,
    contraseña: req.body.contraseña,
  });
  await equipo.save();
  res.send(equipo)
})

// todos los jugadores
router.get('/', async function (req, res) {
  const jugador = await UsuarioInterno.find();
  console.log(jugador);
  res.send(jugador);
});

module.exports = router;