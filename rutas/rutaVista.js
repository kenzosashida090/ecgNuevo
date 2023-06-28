const express = require("express");

const {
  getIniciarSesion,
  getTabla,
  getRegistrar,
  getPaciente,
} = require("../controlador/controladorVista");
const { proteger, activo } = require("../controlador/controladorAut");
const router = express.Router();

router.use(activo);
router.get("/", getIniciarSesion);
router.get("/registrar", getRegistrar);
router.get("/grafica", proteger, getTabla);
router.get("/grafica/:pID", proteger, getPaciente);

module.exports = router;
