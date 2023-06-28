const express = require("express");
const { getHola } = require("../controlador/controladorUsuario");
const { iniciarMQTT } = require("../controlador/controladorGrafica");

const router = express.Router();

//router.post("/usuario", controladorUsuario.crearUsuario);
router.post("/", iniciarMQTT);

module.exports = router;
