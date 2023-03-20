import React from "react";

export const Footer = () => {
   return (
      <footer id='footer' className='footer-app pt-5'>
         <div className='container-wrap bg-footer-color'>
            <div className='container'>
               <div className='footer-inner'>
                  <div className='row wow fadeInUp'>
                     <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='widget footer-widget widget-about'>
                           <span className='footer-logo'>
                              <img src='main-logo.png' alt='logo fifa' />
                           </span>
                           <p>El mismo juego, la misma emoción</p>
                           <h4 className='footer-title'>Redes Sociales</h4>
                           <ul className='social-share-link'>
                              <li>
                                 <span href='https://www.facebook.com/fifa' className='share_facebook'>
                                    <i className='fab fa-facebook-f'></i>
                                 </span>
                              </li>
                              <li>
                                 <span href='https://twitter.com/FIFAcom' className='share_twitter'>
                                    <i className='fab fa-twitter'></i>
                                 </span>
                              </li>
                              <li>
                                 <span href='https://www.youtube.com/FIFATV' className='share_pinterest'>
                                    <i className='fab fa-youtube'></i>
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='widget footer-widget widget-contact'>
                           <h3 className='widget-title'>Oficina Principal</h3>

                           <ul className='widget-contact-info'>
                              <li>
                                 <i className='ei ei-icon_pin_alt'></i>Forrenweidstrasse, 8044 Zürich, Suiza
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className='col-lg-2 col-md-6 col-sm-6'>
                        <div className='widget footer-widget'>
                           <h3 className='widget-title'>EXPLORAR</h3>
                           <ul className='footer-menu'>
                              <li>
                                 <a href='https://www.fifa.com/fifaplus/es/tournaments'>Competiciones</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/about-fifa'>Sobre Nosotros</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/womens-football'>Fútbol Femenino</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/social-impact'>Impacto Social</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/football-development'>Desarrollo del fútbol</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className='col-lg-2 col-md-6 col-sm-6'>
                        <div className='widget footer-widget'>
                           <h3 className='widget-title'>VISITE TAMBIÉN</h3>
                           <ul className='footer-menu'>
                              <li>
                                 <a href='https://www.fifa.com/es/about-fifa/official-documents'>Documentos Oficiales</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/about-fifa/careers'>Trabaja con nosotros</a>
                              </li>
                              <li>
                                 <a href='https://www.fifa.com/es/about-fifa/organisation/contact-fifa'>Contacta con la FIFA</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
