import React from "react";

const Jugadora = ({ jugadora }) => {
   return (
      <div>
         <h3>{jugadora.nombre}</h3>
         <p>Posición: {jugadora.posicion}</p>
         <p>Equipo: {jugadora.equipo}</p>
         <p>Goles: {jugadora.goles}</p>
      </div>
   );
};

export default Jugadora;
