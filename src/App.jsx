import { useEffect } from 'react'
import { useState } from 'react'
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects
} from './Components/index'


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [topofPage, setTopofPage] = useState(true)

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
      <Navbar
        topofPage={topofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
