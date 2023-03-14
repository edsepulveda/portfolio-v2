import { navLinks } from '../constants/data'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useState } from 'react'
import { SiApachesolr } from 'react-icons/si'
import { Link } from './Link'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

export const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [menuToggled, setMenuToggled] = useState(false)
  const isSmallScreen = useMediaQuery('(min-width: 780px)')

  const handleMenu = () => {
    setMenuToggled((prev) => !prev)
  }

  return (
    <header className='font-fira'>
      <nav
        className={`bg-[#152238] lg:bg-transparent lg:backdrop-blur-sm z-50 w-full fixed top-0 py-7 shadow-md lg:shadow-lg`}
      >
        <div className='flex items-center justify-between mx-auto w-5/6'>
          <a href='#' className='flex items-center gap-2 text-[#e63946]'>
            <SiApachesolr className={`text-2xl lg:text-3xl`} />
            <span className='text-xl font-bold uppercase lg:text-2xl'>ED</span>
          </a>

          {/* Desktop Menu */}
          {isSmallScreen ? (
            <div className='flex justify-between gap-16 text-sm uppercase'>
              <ul>
                {navLinks.map((item) => (
                  <Link
                    key={item.id}
                    page={item.linkName}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <button
              className='rounded-full bg-[#e63946] p-2'
              onClick={handleMenu}
            >
              <HiOutlineMenuAlt1 size={20} className='text-white' />
            </button>
          )}

          {/* Mobile Menu */}
          {!isSmallScreen && menuToggled && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              className='fixed right-0 bottom-0 h-full bg-[#152238] shadow-lg w-[250px]'
            >
              <div className='flex justify-end p-8'>
                <button
                  className='rounded-full bg-[#e63946] p-2'
                  onClick={handleMenu}
                >
                  <AiOutlineClose size={20} className='text-white' />
                </button>
              </div>
              <motion.div initial={{ width: 0 }} animate={{ width: 300 }}>
                <ul className='flex flex-col gap-5 ml-[33%] text-2xl text-semibold uppercase'>
                  {navLinks.map((item) => (
                    <Link
                      key={item.id}
                      page={item.linkName}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  )
}
