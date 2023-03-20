import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import JugadoraForm from "./JugadoraForm";
import { Footer } from "./Footer";

const JugadoraList = ({ jugadoras, onEdit, onDelete }) => {
   const [showEditModal, setShowEditModal] = useState(false);
   const [jugadoraToEdit, setJugadoraToEdit] = useState(null);

   const handleEdit = async (jugadoraId, jugadoraActualizada) => {
      try {
         const response = await axios.put(`http://127.0.0.1:5000/jugadoras/${jugadoraId}`, jugadoraActualizada);
         onEdit(response.data);
         setShowEditModal(false);
         setJugadoraToEdit(null);
      } catch (err) {
         console.error(err);
      }
   };

   const handleDelete = async (jugadoraId) => {
      try {
         await axios.delete(`http://127.0.0.1:5000/jugadoras/${jugadoraId}`);
         onDelete(jugadoraId);
      } catch (err) {
         console.error(err);
      }
   };

   const handleShowEditModal = (jugadora) => {
      setJugadoraToEdit(jugadora);
      setShowEditModal(true);
   };

   return (
      <>
         <Row xs={1} sm={2} md={4} className='mb-5 w-100'>
            {jugadoras.map((jugadora) => (
               <Col key={jugadora._id} className='mb-4'>
                  <Card>
                     <Card.Body>
                        <Card.Title className='mb-4'>{jugadora.nombre}</Card.Title>
                        <Card.Text className='mb-1'>Equipo: {jugadora.equipo}</Card.Text>
                        <Card.Text className='mb-1'>Posición: {jugadora.posicion}</Card.Text>
                        <Card.Text className='mb-1'>Goles: {jugadora.goles}</Card.Text>
                        <Button variant='secondary' className='mr-2 mt-4' onClick={() => handleShowEditModal(jugadora)}>
                           Editar
                        </Button>
                        <Button variant='danger' className='mt-4' onClick={() => handleDelete(jugadora._id)}>
                           Borrar
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>

         {showEditModal && (
            <JugadoraForm
               jugadora={jugadoraToEdit}
               onAdd={(jugadoraActualizada) => handleEdit(jugadoraToEdit._id, jugadoraActualizada)}
               onCancel={() => {
                  setShowEditModal(false);
                  setJugadoraToEdit(null);
               }}
            />
         )}
      </>
   );
};

export default JugadoraList;
