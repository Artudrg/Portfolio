import React, { useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiMenu, BiX } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Firma from '../img/firma.png';

function Navbar({ onResetPath }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-900 bg-black/70 px-16 py-6 text-white backdrop:blur-md md:justify-evenly">
      <a
        href="#home"
        className="flex items-center justify-center"
      >
        <img
          src={Firma}
          alt="Firma"
          className="h-10 w-auto opacity-80 transition-all duration-300 hover:opacity-100"
        />
      </a>

      <ul className="hidden gap-10 md:flex">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Inicio</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tecnologías</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Proyectos</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contacto</li>
        </a>
      </ul>

      <div className="hidden gap-10 md:flex items-center">
        <ul className="flex gap-10">
          <a
            href="https://www.linkedin.com/in/artudrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
          >
            <li>
              <BsLinkedin />
            </li>
          </a>
          <a
            href="https://github.com/artudrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-600 hover:opacity-100"
          >
            <li>
              <BsGithub />
            </li>
          </a>
        </ul>
        <button
          onClick={onResetPath}
          className="rounded-md bg-gray-700/60 px-4 py-2 text-sm transition-all duration-300 hover:bg-gray-600/80"
        >
          Cambiar ruta
        </button>
      </div>

      {isOpen ? (
        <BiX
          className="block text-4xl md:hidden"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={() => setIsOpen(true)} />
      )}

      <motion.div
        className="fixed right-0 top-[88px] h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 md:hidden"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="flex flex-col gap-8">
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Inicio</li>
          </a>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Tecnologías</li>
          </a>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Proyectos</li>
          </a>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Contacto</li>
          </a>
          <button
            onClick={onResetPath}
            className="rounded-md bg-gray-700/60 px-4 py-2 text-sm transition-all duration-300 hover:bg-gray-600/80 hover:-translate-y-1"
          >
            Cambiar ruta
          </button>
        </ul>

        <ul className="flex gap-10">
          <a
            href="https://www.linkedin.com/in/artudrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
          >
            <li>
              <BsLinkedin />
            </li>
          </a>
          <a
            href="https://github.com/artudrg/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-600 hover:opacity-100"
          >
            <li>
              <BsGithub />
            </li>
          </a>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
