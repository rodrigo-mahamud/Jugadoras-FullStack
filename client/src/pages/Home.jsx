import React from "react";

export const Home = () => {
   return (
      <>
         <div id='main_content'>
            <header className='site-header header-two toggle-light header_trans-fixed' data-top='992'>
               <div className='container'>
                  <div className='header-inner'>
                     <div className='site-mobile-logo'>
                        <span href='index.html' className='logo'>
                           <img src='assets/img/main-logo.png' alt='site logo' className='main-logo' />
                           <img src='assets/img/logo-two.png' alt='site logo' className='sticky-logo' />
                        </span>
                     </div>

                     <div className='toggle-menu'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                     </div>

                     <nav className='site-nav nav-two'>
                        <div className='close-menu'>
                           <span>Cerrar</span>
                           <i className='ei ei-icon_close'></i>
                        </div>

                        <div className='site-logo'>
                           <span href='index.html' className='logo'>
                              <img src='assets/img/logo-two.png' alt='site logo' className='main-logo' />
                              <img src='assets/img/logo-two.png' alt='site logo' className='sticky-logo' />
                           </span>
                        </div>

                        <div className='menu-wrapper' data-top='992'>
                           <ul className='site-main-menu'>
                              <li>
                                 <span href='index.html'>Portada</span>
                              </li>
                              <li>
                                 <span href='list.html'>Jugadoras</span>
                              </li>
                              <li>
                                 <span href='partidos.html'>Lista de Partidos</span>
                              </li>
                              <li>
                                 <span href='contact.html'>Contacto</span>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </header>
            <section className='banner banner-four'>
               <div className='container'>
                  <div className='banner-content-wrap-four'>
                     <div className='row'>
                        <div className='col-lg-8 col-md-7'>
                           <div className='banner-content'>
                              <h1 className='banner-title wow pixFadeUp' data-wow-delay='0.3s'>
                                 <span> Mundial Femenino </span>
                                 <br />
                                 de Fútbol 2023
                              </h1>

                              <p className='description wow pixFadeUp' data-wow-delay='0.5s'>
                                 La Copa Mundial Femenina de la FIFA Australia/Nueva Zelanda 2023 <br />
                                 será la novena edición de la Copa Mundial Femenina de Fútbol
                                 <br />
                                 organizada por la FIFA.
                              </p>

                              <span href='/list.html' className='pix-btn btn-large btn-light color-two' data-wow-delay='0.6s'>
                                 Ver Jugadoras
                              </span>
                           </div>
                        </div>

                        <div className='col-lg-4 col-md-5'>
                           <div className='promo-mockup wow pixFadeUp text-center'>
                              <img src='media/banner/mobile.png' className='wow pixZoomIn' alt='mpckup' />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='ocean'>
                  <div className='wave'></div>
                  <div className='wave'></div>
                  <div className='wave'></div>
               </div>
            </section>

            <section className='about'>
               <div className='container'>
                  <div className='row'>
                     <div className='col-lg-7'>
                        <div className='about-content'>
                           <div className='section-title'>
                              <h3 className='sub-title wow pixFadeUp'>Sobre El Torneo</h3>
                              <h2 className='title wow pixFadeUp' data-wow-delay='0.3s'>
                                 Mundial Femenino de la <br />
                                 FIFA 2023
                              </h2>
                           </div>

                           <p className='description wow pixFadeUp' data-wow-delay='0.4s'>
                              La Copa Mundial Femenina de la FIFA Australia/Nueva Zelanda 2023 será la novena edición de la Copa Mundial Femenina de Fútbol organizada por la FIFA. Se llevará a cabo en
                              Australia y Nueva Zelanda, siendo la primera vez que una candidatura conjunta gana la sede de un mundial femenino, y la primera oportunidad en la que se realizará la copa
                              en el continente oceánico.
                              <br />
                              <br />
                              Sumado a ello, será el primer campeonato de fútbol organizado por la FIFA que se realizará en dos confederaciones diferentes: la Federación de Fútbol de Australia es
                              miembro de la Confederación Asiática de Fútbol (AFC), mientras que la Asociación de Fútbol de Nueva Zelanda pertenece a la Confederación de Fútbol de Oceanía (OFC). Será
                              la primera edición que cuente con la participación de 32 selecciones, tras la aprobación del Consejo de la FIFA del 31 de julio de 2019.
                           </p>
                        </div>
                     </div>

                     <div className='col-lg-5'>
                        <div className='about-thumb wow pixFadeRight' data-wow-delay='0.6s'>
                           <img src='media/about/1.jpg' alt='about' />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className='teams-six'>
               <div className='container'>
                  <div className='section-title style-six text-center'>
                     <h2 className='title wow fadeInUp' data-wow-delay='0.2s'>
                        Las Jugadoras
                     </h2>
                     <p className='wow fadeInUp' data-wow-delay='0.4s'>
                        Tomfoolery pukka chap I'm telling wellies James Bond william
                        <br />
                        chinwag Charles.
                     </p>
                  </div>

                  <div className='team-slider-wrapper'>
                     <div
                        className='swiper-container wow fadeInUp'
                        data-wow-delay='0.6s'
                        id='team-slider'
                        data-speed='700'
                        data-autoplay='4000'
                        data-loop='true'
                        data-perpage='4'
                        data-space='50'
                        data-breakpoints='{"1024": {"slidesPerView": 3}, "768": {"slidesPerView": 2}, "480": {"slidesPerView": 1}}'>
                        <div className='swiper-wrapper'>
                           <div className='swiper-slide'>
                              <div className='team-member-four wow fadeInUp' data-wow-delay='0.04s'>
                                 <div className='member-avater'>
                                    <img src='media/team/21.png' alt='avater' />
                                    <ul className='member-social'>
                                       <li>
                                          <span href='list.html'>Ver más</span>
                                       </li>
                                    </ul>
                                 </div>

                                 <div className='team-info'>
                                    <h3 className='name'>Pelican Steve</h3>
                                    <h4 className='job'>Founder, CTO</h4>
                                 </div>
                              </div>
                           </div>
                           <div className='swiper-slide'>
                              <div className='team-member-four wow fadeInUp' data-wow-delay='0.04s'>
                                 <div className='member-avater'>
                                    <img src='media/team/22.png' alt='avater' />
                                    <ul className='member-social'>
                                       <li>
                                          <span href='list.html'>Ver más</span>
                                       </li>
                                    </ul>
                                 </div>

                                 <div className='team-info'>
                                    <h3 className='name'>Lance Bogrol</h3>
                                    <h4 className='job'>Marketer</h4>
                                 </div>
                              </div>
                           </div>

                           <div className='swiper-slide'>
                              <div className='team-member-four wow fadeInUp' data-wow-delay='0.04s'>
                                 <div className='member-avater'>
                                    <img src='media/team/23.png' alt='avater' />
                                    <ul className='member-social'>
                                       <li>
                                          <span href='list.html'>Ver más</span>
                                       </li>
                                    </ul>
                                 </div>

                                 <div className='team-info'>
                                    <h3 className='name'>Thomas R. Toe</h3>
                                    <h4 className='job'>Email Marketing</h4>
                                 </div>
                              </div>
                           </div>

                           <div className='swiper-slide'>
                              <div className='team-member-four wow fadeInUp' data-wow-delay='0.04s'>
                                 <div className='member-avater'>
                                    <img src='media/team/24.png' alt='avater' />
                                    <ul className='member-social'>
                                       <li>
                                          <span href='list.html'>Ver más</span>
                                       </li>
                                    </ul>
                                 </div>

                                 <div className='team-info'>
                                    <h3 className='name'>Joss Sticks</h3>
                                    <h4 className='job'>Designer</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='swiper-pagination'></div>
                  </div>
               </div>
            </section>

            <section className='blog-grid-two'>
               <div className='container'>
                  <div className='container'>
                     <div className='section-title style-six text-center'>
                        <h2 className='title wow pixFadeUp' data-wow-delay='0.3s'>
                           <span>Blog</span>
                           Últimas noticias
                        </h2>
                     </div>
                     <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.4s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/25.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span>10 ene 2023</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>La tailandesa Makris...</span>
                                 </h3>

                                 <p>Irravadee Makris, nacida en Alaska y criada en Alabama, nos cuenta su trayectoria en la selección nacional de Tailandia antes...</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.6s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/26.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span> 20 dic, 2022</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>Panamá está lista para hacer realidad...</span>
                                 </h3>

                                 <p>Después de coronar nuevas cumbres en 2022, el fútbol femenino panameño...</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.7s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/27.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span>24 dic, 2022</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>Ahora el pueblo senegalés tiene más expectativas</span>
                                 </h3>

                                 <p>El seleccionador artífice del éxito de Senegal ya está inmerso en los preparativos...</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.4s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/28.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span>12, nov 2022</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>Es muy importante que Camerún clasifique...</span>
                                 </h3>

                                 <p>La leyenda de Camerún habla con FIFA+ sobre las mujeres de su país y su próximo Torneo de Repesca</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.6s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/29.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span> 10 Sept, 2022</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>Playoffs de la Copa Mundial Femenina</span>
                                 </h3>

                                 <p>Equipos, fechas, horarios, sedes y mucho más: toda la información sobre el repechaje.</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                           <article className='blog-post style-three wow pixFadeLeft' data-wow-delay='0.7s'>
                              <div className='feature-image'>
                                 <span>
                                    <img src='media/blog/30.jpg' alt='blog-thumb' />
                                 </span>
                              </div>
                              <div className='blog-content'>
                                 <ul className='post-meta'>
                                    <li>
                                       <span>July 24, 2020</span>
                                    </li>
                                 </ul>

                                 <h3 className='entry-title'>
                                    <span>Sinceramente, no tenía ni idea de cuánto...</span>
                                 </h3>

                                 <p>Elise Kellond-Knight habla con FIFA+ sobre su ausencia durante más de dos años.</p>

                                 <span className='read-more'>
                                    <i className='ei ei-arrow_right'></i>
                                 </span>
                              </div>
                           </article>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <footer id='footer' className='footer-app'>
               <div className='container-wrap bg-footer-color'>
                  <div className='container'>
                     <div className='footer-inner'>
                        <div className='row wow fadeInUp'>
                           <div className='col-lg-4 col-md-6 col-sm-6'>
                              <div className='widget footer-widget widget-about'>
                                 <span className='footer-logo'>
                                    <img src='assets/img/main-logo.png' alt='logo fifa' />
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
                                       <span href='https://www.fifa.com/fifaplus/es/tournaments'>Competiciones</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/about-fifa'>Sobre Nosotros</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/womens-football'>Fútbol Femenino</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/social-impact'>Impacto Social</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/football-development'>Desarrollo del fútbol</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className='col-lg-2 col-md-6 col-sm-6'>
                              <div className='widget footer-widget'>
                                 <h3 className='widget-title'>VISITE TAMBIÉN</h3>
                                 <ul className='footer-menu'>
                                    <li>
                                       <span href='https://www.fifa.com/es/about-fifa/official-documents'>Documentos Oficiales</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/about-fifa/careers'>Trabaja con nosotros</span>
                                    </li>
                                    <li>
                                       <span href='https://www.fifa.com/es/about-fifa/organisation/contact-fifa'>Contacta con la FIFA</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
      </>
   );
};
