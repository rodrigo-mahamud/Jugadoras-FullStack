const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jugadoraSchema = new Schema({
   nombre: { type: String, required: true },
   posicion: { type: String, required: true },
   equipo: { type: String, required: true },
   goles: { type: Number, default: 0 },
});

module.exports = mongoose.model("Jugadora", jugadoraSchema);
