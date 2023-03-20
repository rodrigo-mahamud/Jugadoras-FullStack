import React from "react";
import { HeaderNav } from "../components/HeaderNav";
import { PageBanner } from "../components/PageBanner";

export const Contact = () => {
   const person = { name: "Contacto" };
   return (
      <>
         <HeaderNav></HeaderNav>
         <PageBanner name={person.name}></PageBanner>
         <section className='contactus'>
            <div className='container'>
               <div className='row'>
                  <div className='col-md-4'>
                     <div className='contact-infos'>
                        <div className='contact-info'>
                           <h3 className='title'>Nuestras Oficinas</h3>
                           <span className='description'>
                              <i className='ei ei-icon_pin_alt'></i>Forrenweidstrasse, 8044 Zürich, Suiza
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className='col-md-8'>
                     <div className='contact-froms'>
                        <form action='php/mailer.php' className='contact-form' data-pixsaas='contact-froms'>
                           <div className='row'>
                              <div className='col-md-6'>
                                 <input className='mb-3' type='text' placeholder='Nombre' id='nombre' name='nombre' />
                              </div>

                              <div className='col-md-6'>
                                 <input className='mb-3' type='text' placeholder='Apellidos' id='apellidos' name='apellidos' />
                              </div>
                           </div>
                           <input className='mb-3' type='number' id='edad' placeholder='Edad' name='edad' />
                           <input className='mb-3' type='email' id='correo' placeholder='Correo' name='correo' />
                           <input className='mb-3' type='text' id='asunto' placeholder='Asunto' name='asunto' />
                           <textarea id='mensaje' placeholder='Mensaje' name='mensaje' rows='5'></textarea>
                           <div className='row'>
                              <div className='form-result alert'>
                                 <div className='content'></div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
