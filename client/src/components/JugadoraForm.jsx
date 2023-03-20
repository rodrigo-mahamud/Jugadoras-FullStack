import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const JugadoraForm = ({ onAdd, jugadora, onCancel }) => {
   const [nombre, setNombre] = useState(jugadora ? jugadora.nombre : "");
   const [posicion, setPosicion] = useState(jugadora ? jugadora.posicion : "");
   const [equipo, setEquipo] = useState(jugadora ? jugadora.equipo : "");
   const [goles, setGoles] = useState(jugadora ? jugadora.goles : "");
   const [showModal, setShowModal] = useState(true);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!nombre || !posicion || !equipo) {
         alert("Por favor, completa todos los campos requeridos.");
         return;
      }
      const nuevaJugadora = {
         nombre,
         posicion,
         equipo,
         goles: parseInt(goles) || 0,
      };

      try {
         const response = jugadora ? await axios.put(`http://127.0.0.1:5000/jugadoras/${jugadora._id}`, nuevaJugadora) : await axios.post("http://127.0.0.1:5000/jugadoras", nuevaJugadora);
         onAdd(response.data);
         setShowModal(false);
         if (onCancel) {
            onCancel();
         }
      } catch (err) {
         console.error(err);
      }
   };
   const handleCloseModal = () => {
      setShowModal(false);
      if (onCancel) {
         onCancel();
      }
   };

   return (
      <>
         <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
               <Modal.Title>{jugadora ? "Editar Jugadora" : "Añadir Jugadora"}</Modal.Title>
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
               <Button variant='secondary' onClick={handleCloseModal}>
                  Cerrar
               </Button>
               <Button variant='primary' onClick={handleSubmit}>
                  {jugadora ? "Actualizar Jugadora" : "Agregar Jugadora"}
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default JugadoraForm;
