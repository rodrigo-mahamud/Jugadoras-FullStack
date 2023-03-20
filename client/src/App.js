import React, { useState, useEffect } from "react";
import axios from "axios";

import JugadoraForm from "./components/JugadoraForm";
import JugadoraList from "./components/JugadoraList";
import { PageBanner } from "./components/PageBanner";
import { HeaderNav } from "./components/HeaderNav";

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
      <>
         <HeaderNav></HeaderNav>
         <PageBanner></PageBanner>

         <div className='container'>
            <JugadoraForm onAdd={handleAddJugadora} />
            <div className='row'>
               <JugadoraList jugadoras={jugadoras} />
            </div>
         </div>
      </>
   );
};

export default App;
