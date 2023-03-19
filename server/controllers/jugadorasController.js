const Jugadora = require("../models/Jugadora");

// Obtener todas las jugadoras
exports.getJugadoras = async (req, res) => {
   try {
      const jugadoras = await Jugadora.find();
      res.status(200).json(jugadoras);
   } catch (error) {
      res.status(500).json({ message: "Error al obtener las jugadoras" });
   }
};

// Crear una nueva jugadora
exports.createJugadora = async (req, res) => {
   try {
      const nuevaJugadora = new Jugadora(req.body);
      await nuevaJugadora.save();
      res.status(201).json(nuevaJugadora);
   } catch (error) {
      res.status(400).json({ message: "Error al crear la jugadora" });
   }
};

// Obtener una jugadora por ID
exports.getJugadora = async (req, res) => {
   try {
      const jugadora = await Jugadora.findById(req.params.id);
      if (!jugadora) {
         res.status(404).json({ message: "Jugadora no encontrada" });
      } else {
         res.status(200).json(jugadora);
      }
   } catch (error) {
      res.status(500).json({ message: "Error al obtener la jugadora" });
   }
};

// Actualizar una jugadora por ID
exports.updateJugadora = async (req, res) => {
   try {
      const jugadora = await Jugadora.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!jugadora) {
         res.status(404).json({ message: "Jugadora no encontrada" });
      } else {
         res.status(200).json(jugadora);
      }
   } catch (error) {
      res.status(400).json({ message: "Error al actualizar la jugadora" });
   }
};

// Eliminar una jugadora por ID
exports.deleteJugadora = async (req, res) => {
   try {
      const jugadora = await Jugadora.findByIdAndRemove(req.params.id);
      if (!jugadora) {
         res.status(404).json({ message: "Jugadora no encontrada" });
      } else {
         res.status(200).json({ message: "Jugadora eliminada" });
      }
   } catch (error) {
      res.status(500).json({ message: "Error al eliminar la jugadora" });
   }
};
