const Paciente = require("../modelo/pacienteModelo");
const catchAsync = require("../utilidades/catchAsync");
const AppError = require("../utilidades/catchAsync");
const cliente = require("../server");
const protocolo = "mqtt";
const host = "192.168.1.89";
const mqtt = require("mqtt");
const port = "1883";
const clienteID = "mqtt_1";
const Ecg = require("../modelo/ecgModelo");
const enlaceURL = `${protocolo}://${host}:${port}`;
exports.iniciarMQTT = catchAsync(async (req, res, next) => {
  const { logico, idP } = req.body;
  const cliente = mqtt.connect(enlaceURL, {
    clienteID,
    clean: true,
    connectTimeout: 4000,
    username: "arduino",
    password: "123",
    reconnectPeriod: 1000,
  });
  if (logico) {
    cliente.on("connect", function () {
      console.log("Conexión MQTT exitosa");
      console.log(cliente.options);
      // Suscribirse al tema MQTT
      cliente.subscribe("testTopic");
    });
    res.status(202).json({
      status: "conexion exitosa",
    });
    // Evento de recepción de mensaje MQTT
  } else {
    cliente.end(() => {
      console.log("Conexión MQTT cerrada");
    });
    res.status(202).json({
      status: "conexion cerrada",
    });
  }
});
