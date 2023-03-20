import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JugadoraForm from "./components/JugadoraForm";
import JugadoraList from "./components/JugadoraList";
import { PageBanner } from "./components/PageBanner";
import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";

const App = () => {
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
            <div className='row mt-5 mb-4'>
               <div className='col-6'>
                  <h2>Estadísticas</h2>
               </div>
               <div className='col-6 d-flex justify-content-end'>
                  <Button className='mr-5' variant='primary' onClick={() => setShowAddModal(true)}>
                     Añadir Jugadora
                  </Button>
               </div>
            </div>
            {showAddModal && <JugadoraForm onAdd={handleAddJugadora} onCancel={() => setShowAddModal(false)} />}
            <div className='row'>
               <JugadoraList jugadoras={jugadoras} onEdit={handleEditJugadora} onDelete={handleDeleteJugadora} />
            </div>
         </div>
         <Footer></Footer>
      </>
   );
};

export default App;
