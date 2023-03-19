import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
         <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'>
               <span className='font-semibold text-xl tracking-tight'>Jugadoras de Fútbol</span>
            </Link>
         </div>
         <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
               <Link to='/' className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                  Inicio
               </Link>
               <Link to='/create' className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                  Crear jugadora
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
