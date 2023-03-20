import React from "react";

const JugadoraList = ({ jugadoras }) => {
   return (
      <>
         {jugadoras.map((jugadora, index) => (
            <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
               <div className='card'>
                  <div className='card-body'>
                     <div className='row'>
                        <h5 className='card-title col-8'>{jugadora.nombre}</h5>
                        <div className='col-4'>
                           <div className='row'>
                              <div className='edit w-50'> a</div>
                              <div className='delete w-50'>b</div>
                           </div>
                        </div>
                     </div>
                     <p className='card-text'>
                        Posición: {jugadora.posicion} <br />
                        Equipo: {jugadora.equipo} <br />
                        Goles: {jugadora.goles}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default JugadoraList;
