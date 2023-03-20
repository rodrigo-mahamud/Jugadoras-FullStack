import React from "react";
import { HeaderNav } from "../components/HeaderNav";

export const Home = () => {
   return (
      <>
         <HeaderNav></HeaderNav>
         <div id='main_content'>
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
                              <img src='mobile.png' className='wow pixZoomIn' alt='mpckup' />
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
                           <img src='1.jpg' alt='about' />
                        </div>
                     </div>
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
                                    <img src='/25.jpg' alt='blog-thumb' />
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
                                    <img src='/26.jpg' alt='blog-thumb' />
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
                                    <img src='/27.jpg' alt='blog-thumb' />
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
                                    <img src='/28.jpg' alt='blog-thumb' />
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
                                    <img src='/29.jpg' alt='blog-thumb' />
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
                                    <img src='/30.jpg' alt='blog-thumb' />
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
         </div>
      </>
   );
};
