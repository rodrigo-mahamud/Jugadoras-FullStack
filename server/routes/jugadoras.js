const express = require("express");
const Jugadora = require("../models/Jugadora");
const router = express.Router();
// Obtener todas las jugadoras
router.get("/", async (req, res) => {
   try {
      const jugadoras = await Jugadora.find();
      res.json(jugadoras);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Crear una jugadora
router.post("/", async (req, res) => {
   const { nombre, posicion, equipo, goles } = req.body;
   const nuevaJugadora = new Jugadora({ nombre, posicion, equipo, goles });

   try {
      const jugadoraGuardada = await nuevaJugadora.save();
      res.status(201).json(jugadoraGuardada);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Obtener una jugadora específica
router.get("/:id", async (req, res) => {
   try {
      const jugadora = await Jugadora.findById(req.params.id);
      if (jugadora) {
         res.json(jugadora);
      } else {
         res.status(404).json({ message: "Jugadora no encontrada" });
      }
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Actualizar una jugadora
router.put("/:id", async (req, res) => {
   try {
      const jugadoraActualizada = await Jugadora.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (jugadoraActualizada) {
         res.json(jugadoraActualizada);
      } else {
         res.status(404).json({ message: "Jugadora no encontrada" });
      }
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Eliminar una jugadora
router.delete("/:id", async (req, res) => {
   try {
      const jugadoraEliminada = await Jugadora.findByIdAndRemove(req.params.id);
      if (jugadoraEliminada) {
         res.json({ message: "Jugadora eliminada" });
      } else {
         res.status(404).json({ message: "Jugadora no encontrada" });
      }
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Exportar el enrutador
module.exports = router;
