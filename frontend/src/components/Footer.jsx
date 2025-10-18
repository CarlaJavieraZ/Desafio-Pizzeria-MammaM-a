import React from 'react';

const Footer = () => {

  return (
    <>
      <footer className='bg-dark text-white text-center p-4'>
        © {new Date().getFullYear()} - Pizzería Mamma Mia! - Todos los derechos reservados
      </footer>
    </>
  )
}

export default Footer