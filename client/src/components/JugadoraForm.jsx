import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const JugadoraForm = ({ onAdd }) => {
   const [nombre, setNombre] = useState("");
   const [posicion, setPosicion] = useState("");
   const [equipo, setEquipo] = useState("");
   const [goles, setGoles] = useState("");
   const [showModal, setShowModal] = useState(false);

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
         setShowModal(false);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <>
         <div className='row mt-5 mb-4'>
            <div className='col-6 '>
               <h2>Estadisticas</h2>
            </div>
            <div className='col-6 d-flex justify-content-end'>
               <Button variant='primary' onClick={() => setShowModal(true)}>
                  Añadir Jugadora
               </Button>
            </div>
         </div>

         <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
               <Modal.Title>Añadir Jugadora</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form onSubmit={handleSubmit}>
                  <input className='formMedW mb-3' type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                  <input className='formcuartW mb-3' type='number' placeholder='Goles' value={goles} onChange={(e) => setGoles(e.target.value)} />
                  <input className=' mb-3' type='text' placeholder='Posición' value={posicion} onChange={(e) => setPosicion(e.target.value)} />
                  <input className=' mb-3' type='text' placeholder='Equipo' value={equipo} onChange={(e) => setEquipo(e.target.value)} />
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant='secondary' onClick={() => setShowModal(false)}>
                  Cerrar
               </Button>
               <Button variant='primary' onClick={handleSubmit}>
                  Agregar Jugadora
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default JugadoraForm;
