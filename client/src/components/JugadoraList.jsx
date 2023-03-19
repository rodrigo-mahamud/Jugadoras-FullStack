import React from "react";

const JugadoraList = ({ jugadoras }) => {
   return (
      <div className='container'>
         <div className='row'>
            {jugadoras.map((jugadora, index) => (
               <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                  <div className='card'>
                     <div className='card-body'>
                        <h5 className='card-title'>{jugadora.nombre}</h5>
                        <p className='card-text'>
                           Posición: {jugadora.posicion} <br />
                           Equipo: {jugadora.equipo} <br />
                           Goles: {jugadora.goles}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default JugadoraList;
