import React from "react";

export const PageBanner = () => {
   return (
      <>
         <section className='page-banner'>
            <div className='container'>
               <div className='page-title-wrapper'>
                  <h1 className='page-title'>Lista de Jugadoras</h1>

                  <ul className='bradcurmed'>
                     <li>
                        <a href='../list.html' rel='noopener noreferrer'>
                           Fifa 2023
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <ul className='animate-ball'>
               <li className='ball'></li>
               <li className='ball'></li>
               <li className='ball'></li>
               <li className='ball'></li>
               <li className='ball'></li>
            </ul>
         </section>
         ;
      </>
   );
};
