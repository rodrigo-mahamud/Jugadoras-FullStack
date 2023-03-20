import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { HeaderNav } from "../components/HeaderNav";
import JugadoraForm from "../components/JugadoraForm";
import JugadoraList from "../components/JugadoraList";
import { PageBanner } from "../components/PageBanner";

export const List = () => {
   const [jugadoras, setJugadoras] = useState([]);
   const [showAddModal, setShowAddModal] = useState(false);

   useEffect(() => {
      const fetchJugadoras = async () => {
         const response = await axios.get("http://127.0.0.1:5000/jugadoras");
         setJugadoras(response.data);
      };

      fetchJugadoras();
   }, []);

   const handleAddJugadora = (jugadora) => {
      setJugadoras([...jugadoras, jugadora]);
      setShowAddModal(false);
   };

   const handleEditJugadora = (updatedJugadora) => {
      setJugadoras(jugadoras.map((jugadora) => (jugadora._id === updatedJugadora._id ? updatedJugadora : jugadora)));
   };

   const handleDeleteJugadora = (jugadoraId) => {
      setJugadoras(jugadoras.filter((jugadora) => jugadora._id !== jugadoraId));
   };
   return (
      <>
         <HeaderNav></HeaderNav>
         <PageBanner></PageBanner>
         <div className='container'>
            <div className='row mt-5 mb-4 '>
               <div className='col-lg-6 col-12 '>
                  <h2>Estadísticas</h2>
               </div>
               <div className='col-lg-6 col-12 d-flex justify-content-end'>
                  <Button className='mr-lg-5 buttonMobile' variant='primary' onClick={() => setShowAddModal(true)}>
                     Añadir Jugadora
                  </Button>
               </div>
            </div>
            {showAddModal && <JugadoraForm onAdd={handleAddJugadora} onCancel={() => setShowAddModal(false)} />}
            <div className='row cards'>
               <JugadoraList jugadoras={jugadoras} onEdit={handleEditJugadora} onDelete={handleDeleteJugadora} />
            </div>
         </div>
      </>
   );
};
