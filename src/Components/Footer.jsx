import React from 'react'
import { SiApachesolr } from 'react-icons/si'
import { navLinks } from '../constants/data'
import { Link } from './Link'

export const Footer = ({ selectedPage, setSelectedPage }) => {
  return (
    <footer className='p-4 lg:p-8 bg-[#1c2e4a] text-white'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a href='#' className='flex justify-center gap-4 text-2xl font-semibold text-[#FC575E]'>
              <SiApachesolr className={`text-2xl lg:text-3xl`}/>
              <span className='text-xl font-bold uppercase lg:text-2xl'>ED</span>
        </a>
        <p className='my-6'>Portafolio creado con React & TailwindCSS <a href="https://github.com/edsepulveda/portfolio-v2" className='hover:underline text-indigo-400' target='_blank'>Repositorio</a></p>
        <ul className='flex flex-wrap justify-center items-center mb-6'>
          {
            navLinks.map((item) => (
              <Link 
              key={item.id} 
              page={item.linkName} 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
              />
            ))
          }
        </ul>
        <a className='block text-xs mb-3' href="https://www.flaticon.com/free-icons/bag" title="bag icons">Bag icons created by Dimitry Miroliubov - Flaticon</a>
        <span className='text-sm'>© 2023-2024</span>
      </div>
    </footer>
  )
}
