import { useEffect } from 'react'
import { useState } from 'react'
import { About } from './Components/About'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'
// import { useMediaQuery } from './hooks/useMediaQuery'

function App () {

  const [selectedPage, setSelectedPage] = useState('home')
  const [topofPage, setTopofPage] = useState(true)
  // const mediaQuery = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopofPage(true)
      if (window.scrollX !== 0) setTopofPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='App font-fira'>
      <Navbar topofPage={topofPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Hero />
      <About />
    </div>
  )
}

export default App
