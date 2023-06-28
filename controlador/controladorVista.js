const Ecg = require("../modelo/ecgModelo");
const Paciente = require("../modelo/pacienteModelo");
const AppError = require("../utilidades/appError");
const catchAsync = require("../utilidades/catchAsync");

exports.getIniciarSesion = catchAsync(async (req, res, next) => {
  res.status(200).render("login");
});
exports.getRegistrar = catchAsync(async (req, res, next) => {
  res.status(200).render("registrar");
});

exports.getTabla = catchAsync(async (req, res, next) => {
  const pacientes = await Paciente.find().populate("doctor");

  res.status(200).render("grafica", {
    titulo: "Pacientes",
    pacientes,
  });
});

exports.getPaciente = catchAsync(async (req, res, next) => {
  const idPaciente = req.params.pID;
  const pacienteInfo = await Paciente.findOne({ _id: idPaciente }).populate(
    "doctor"
  );
  const ecgInfo = await Ecg.findOne({ paciente: idPaciente }).populate(
    "paciente"
  );
  if (!pacienteInfo) {
    return next(new AppError("Ningun paciente se encontro con ese ID", 404));
  }
  res.status(200).render("paciente", {
    titulo: `Paciente ${pacienteInfo.nombre}`,
    pacienteInfo,
    ecgInfo,
  });
});
