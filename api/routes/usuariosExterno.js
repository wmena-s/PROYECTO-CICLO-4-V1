var express = require('express');
var router = express.Router();

const usuariosExterno  = require('../modelos/registroUsuarioExterno');



// crea jugador
router.post('/', async function(req, res){
  const usuarioE = new usuariosExterno({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    correo: req.body.correo,
    contraseña: req.body.contraseña,
  });
  await usuarioE.save();
  res.send(usuarioE)
})

// todos los jugadores
router.get('/', async function (req, res) {
    const usuarioE = await usuariosExterno.find();
    console.log(usuarioE)
    res.send(usuarioE);
  });

module.exports = router;