var express = require('express');
var router = express.Router();

const usuarioInterno  = require('../modelos/registroUsuarioInterno');



// crea jugador
router.post('/', async function(req, res){
  const equipo = new usuarioInterno({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    correo: req.body.correo,
    contraseña: req.body.contraseña,
  });
  await equipo.save();
  res.send(equipo)
})

module.exports = router;