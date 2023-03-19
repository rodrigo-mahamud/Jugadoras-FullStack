import React, { useState } from "react";
import axios from "axios";

const JugadoraForm = ({ onAdd }) => {
   const [nombre, setNombre] = useState("");
   const [posicion, setPosicion] = useState("");
   const [equipo, setEquipo] = useState("");
   const [goles, setGoles] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!nombre || !posicion || !equipo) {
         alert("Por favor, completa todos los campos requeridos.");
         return;
      }
      const nuevaJugadora = { nombre, posicion, equipo, goles: parseInt(goles) || 0 };
      try {
         const response = await axios.post("http://127.0.0.1:5000/jugadoras", nuevaJugadora);
         onAdd(response.data);
         setNombre("");
         setPosicion("");
         setEquipo("");
         setGoles("");
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
         <input type='text' placeholder='Posición' value={posicion} onChange={(e) => setPosicion(e.target.value)} />
         <input type='text' placeholder='Equipo' value={equipo} onChange={(e) => setEquipo(e.target.value)} />
         <input type='number' placeholder='Goles' value={goles} onChange={(e) => setGoles(e.target.value)} />
         <button type='submit'>Agregar Jugadora</button>
      </form>
   );
};

export default JugadoraForm;
