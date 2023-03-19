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
         <Button variant='primary' onClick={() => setShowModal(true)}>
            Añadir Jugadora
         </Button>

         <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Añadir Jugadora</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form onSubmit={handleSubmit}>
                  <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                  <input type='text' placeholder='Posición' value={posicion} onChange={(e) => setPosicion(e.target.value)} />
                  <input type='text' placeholder='Equipo' value={equipo} onChange={(e) => setEquipo(e.target.value)} />
                  <input type='number' placeholder='Goles' value={goles} onChange={(e) => setGoles(e.target.value)} />
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
