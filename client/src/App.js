import React, { useState, useEffect } from "react";
import axios from "axios";
import JugadoraForm from "./components/JugadoraForm";
import JugadoraList from "./components/JugadoraList";

const App = () => {
   const [jugadoras, setJugadoras] = useState([]);

   useEffect(() => {
      const fetchJugadoras = async () => {
         const response = await axios.get("http://127.0.0.1:5000/jugadoras");
         setJugadoras(response.data);
      };

      fetchJugadoras();
   }, []);

   const handleAddJugadora = (jugadora) => {
      setJugadoras([...jugadoras, jugadora]);
   };

   return (
      <div>
         <h1>Lista de Jugadoras</h1>
         <JugadoraForm onAdd={handleAddJugadora} />
         <JugadoraList jugadoras={jugadoras} />
      </div>
   );
};

export default App;
