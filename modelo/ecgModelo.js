const mongoose = require("mongoose");

const ecgEsquema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente" },
  fechaPrueba: {
    type: Date,
    default: Date.now,
  },
  coomentario: {
    type: String,
  },
  ecgDato: {
    type: [Number],
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Ecg = mongoose.model("Ecg", ecgEsquema);

module.exports = Ecg;
